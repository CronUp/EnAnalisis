!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module) {
    module.exports = t()
  } else {
    if ('function' == typeof define && define.amd) {
      define([], t)
    } else {
      var i = t()
      for (var n in i) ('object' == typeof exports ? exports : e)[n] = i[n]
    }
  }
})(this, function () {
  return (function (e) {
    var t = {
      ClientJS: u,
      innerHTML: e.innerHTML,
      ClientJS: s,
    }
    function i(n) {
      if (t[n]) {
        return t[n].exports
      }
      var r = (t[n] = {
        i: n,
        l: false,
        exports: {},
      })
      return e[n].call(r.exports, r, r.exports, i), (r.l = true), r.exports
    }
    return (
      (i.m = e),
      (i.c = t),
      (i.d = function (e, t, n) {
        i.o(e, t) ||
          Object.defineProperty(e, t, {
            enumerable: true,
            get: n,
          })
      }),
      (i.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
        Object.defineProperty(e, '__esModule', { value: true })
      }),
      (i.t = function (e, t) {
        if ((1 & t && (e = i(e)), 8 & t)) {
          return e
        }
        if (4 & t && 'object' == typeof e && e && e.__esModule) {
          return e
        }
        var n = Object.create(null)
        if (
          (i.r(n),
          Object.defineProperty(n, 'default', {
            enumerable: true,
            value: e,
          }),
          2 & t && 'string' != typeof e)
        ) {
          for (var r in e)
            i.d(
              n,
              r,
              function (t) {
                return e[t]
              }.bind(null, r)
            )
        }
        return n
      }),
      (i.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return i.d(t, 'a', t), t
      }),
      (i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (i.p = ''),
      i((i.s = 12))
    )
  })([
    function (e, t, i) {
      'use strict'
      var n,
        r,
        a = i(1)(),
        o = i(3),
        s = i(4),
        l = i(6),
        u = function () {
          var e = new s()
          return (n = e.getResult()), (r = new l()), this
        }
      u.prototype = {
        getSoftwareVersion: function () {
          return '0.1.11'
        },
        getBrowserData: function () {
          return n
        },
        getFingerprint: function () {
          var t = n.ua,
            i = this.getScreenPrint(),
            r = this.getPlugins(),
            a = this.getFonts(),
            s = this.isLocalStorage(),
            l = this.isSessionStorage(),
            u = this.getTimeZone(),
            c = this.getLanguage(),
            d = this.getSystemLanguage(),
            p = this.isCookie(),
            f = this.getCanvasPrint()
          return o(
            t +
              '|' +
              i +
              '|' +
              r +
              '|' +
              a +
              '|' +
              s +
              '|' +
              l +
              '|' +
              u +
              '|' +
              c +
              '|' +
              d +
              '|' +
              p +
              '|' +
              f,
            256
          )
        },
        getCustomFingerprint: function () {
          for (var t = '', i = 0; i < arguments.length; i++) {
            t += arguments[i] + '|'
          }
          return o(t, 256)
        },
        getUserAgent: function () {
          return n.ua
        },
        getUserAgentLowerCase: function () {
          return n.ua.toLowerCase()
        },
        getBrowser: function () {
          return n.browser.name
        },
        getBrowserVersion: function () {
          return n.browser.version
        },
        getBrowserMajorVersion: function () {
          return n.browser.major
        },
        isIE: function () {
          return /IE/i.test(n.browser.name)
        },
        isChrome: function () {
          return /Chrome/i.test(n.browser.name)
        },
        isFirefox: function () {
          return /Firefox/i.test(n.browser.name)
        },
        isSafari: function () {
          return /Safari/i.test(n.browser.name)
        },
        isMobileSafari: function () {
          return /Mobile\sSafari/i.test(n.browser.name)
        },
        isOpera: function () {
          return /Opera/i.test(n.browser.name)
        },
        getEngine: function () {
          return n.engine.name
        },
        getEngineVersion: function () {
          return n.engine.version
        },
        getOS: function () {
          return n.os.name
        },
        getOSVersion: function () {
          return n.os.version
        },
        isWindows: function () {
          return /Windows/i.test(n.os.name)
        },
        isMac: function () {
          return /Mac/i.test(n.os.name)
        },
        isLinux: function () {
          return /Linux/i.test(n.os.name)
        },
        isUbuntu: function () {
          return /Ubuntu/i.test(n.os.name)
        },
        isSolaris: function () {
          return /Solaris/i.test(n.os.name)
        },
        getDevice: function () {
          return n.device.model
        },
        getDeviceType: function () {
          return n.device.type
        },
        getDeviceVendor: function () {
          return n.device.vendor
        },
        getCPU: function () {
          return n.cpu.architecture
        },
        isMobile: function () {
          var e = n.ua || navigator.vendor || window.opera
          return (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
              e
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              e.substr(0, 4)
            )
          )
        },
        isMobileMajor: function () {
          return (
            this.isMobileAndroid() ||
            this.isMobileBlackBerry() ||
            this.isMobileIOS() ||
            this.isMobileOpera() ||
            this.isMobileWindows()
          )
        },
        isMobileAndroid: function () {
          return !!n.ua.match(/Android/i)
        },
        isMobileOpera: function () {
          return !!n.ua.match(/Opera Mini/i)
        },
        isMobileWindows: function () {
          return !!n.ua.match(/IEMobile/i)
        },
        isMobileBlackBerry: function () {
          return !!n.ua.match(/BlackBerry/i)
        },
        isMobileIOS: function () {
          return !!n.ua.match(/iPhone|iPad|iPod/i)
        },
        isIphone: function () {
          return !!n.ua.match(/iPhone/i)
        },
        isIpad: function () {
          return !!n.ua.match(/iPad/i)
        },
        isIpod: function () {
          return !!n.ua.match(/iPod/i)
        },
        getScreenPrint: function () {
          return (
            'Current Resolution: ' +
            this.getCurrentResolution() +
            ', Available Resolution: ' +
            this.getAvailableResolution() +
            ', Color Depth: ' +
            this.getColorDepth() +
            ', Device XDPI: ' +
            this.getDeviceXDPI() +
            ', Device YDPI: ' +
            this.getDeviceYDPI()
          )
        },
        getColorDepth: function () {
          return screen.colorDepth
        },
        getCurrentResolution: function () {
          return screen.width + 'x' + screen.height
        },
        getAvailableResolution: function () {
          return screen.availWidth + 'x' + screen.availHeight
        },
        getDeviceXDPI: function () {
          return screen.deviceXDPI
        },
        getDeviceYDPI: function () {
          return screen.deviceYDPI
        },
        getPlugins: function () {
          for (var e = '', t = 0; t < navigator.plugins.length; t++) {
            t == navigator.plugins.length - 1
              ? (e += navigator.plugins[t].name)
              : (e += navigator.plugins[t].name + ', ')
          }
          return e
        },
        isJava: function () {
          return navigator.javaEnabled()
        },
        getJavaVersion: function () {
          throw new Error(
            'Please use client.java.js or client.js if you need this functionality!'
          )
        },
        isFlash: function () {
          return !!navigator.plugins['Shockwave Flash']
        },
        getFlashVersion: function () {
          throw new Error(
            'Please use client.flash.js or client.js if you need this functionality!'
          )
        },
        isSilverlight: function () {
          return !!navigator.plugins['Silverlight Plug-In']
        },
        getSilverlightVersion: function () {
          return this.isSilverlight()
            ? navigator.plugins['Silverlight Plug-In'].description
            : ''
        },
        isMimeTypes: function () {
          return !(!navigator.mimeTypes || !navigator.mimeTypes.length)
        },
        getMimeTypes: function () {
          var e = ''
          if (navigator.mimeTypes) {
            for (var t = 0; t < navigator.mimeTypes.length; t++) {
              t == navigator.mimeTypes.length - 1
                ? (e += navigator.mimeTypes[t].description)
                : (e += navigator.mimeTypes[t].description + ', ')
            }
          }
          return e
        },
        isFont: function (e) {
          return r.detect(e)
        },
        getFonts: function () {
          for (
            var e = [
                'Abadi MT Condensed Light',
                'Adobe Fangsong Std',
                'Adobe Hebrew',
                'Adobe Ming Std',
                'Agency FB',
                'Aharoni',
                'Andalus',
                'Angsana New',
                'AngsanaUPC',
                'Aparajita',
                'Arab',
                'Arabic Transparent',
                'Arabic Typesetting',
                'Arial Baltic',
                'Arial Black',
                'Arial CE',
                'Arial CYR',
                'Arial Greek',
                'Arial TUR',
                'Arial',
                'Batang',
                'BatangChe',
                'Bauhaus 93',
                'Bell MT',
                'Bitstream Vera Serif',
                'Bodoni MT',
                'Bookman Old Style',
                'Braggadocio',
                'Broadway',
                'Browallia New',
                'BrowalliaUPC',
                'Calibri Light',
                'Calibri',
                'Californian FB',
                'Cambria Math',
                'Cambria',
                'Candara',
                'Castellar',
                'Casual',
                'Centaur',
                'Century Gothic',
                'Chalkduster',
                'Colonna MT',
                'Comic Sans MS',
                'Consolas',
                'Constantia',
                'Copperplate Gothic Light',
                'Corbel',
                'Cordia New',
                'CordiaUPC',
                'Courier New Baltic',
                'Courier New CE',
                'Courier New CYR',
                'Courier New Greek',
                'Courier New TUR',
                'Courier New',
                'DFKai-SB',
                'DaunPenh',
                'David',
                'DejaVu LGC Sans Mono',
                'Desdemona',
                'DilleniaUPC',
                'DokChampa',
                'Dotum',
                'DotumChe',
                'Ebrima',
                'Engravers MT',
                'Eras Bold ITC',
                'Estrangelo Edessa',
                'EucrosiaUPC',
                'Euphemia',
                'Eurostile',
                'FangSong',
                'Forte',
                'FrankRuehl',
                'Franklin Gothic Heavy',
                'Franklin Gothic Medium',
                'FreesiaUPC',
                'French Script MT',
                'Gabriola',
                'Gautami',
                'Georgia',
                'Gigi',
                'Gisha',
                'Goudy Old Style',
                'Gulim',
                'GulimChe',
                'GungSeo',
                'Gungsuh',
                'GungsuhChe',
                'Haettenschweiler',
                'Harrington',
                'Hei S',
                'HeiT',
                'Heisei Kaku Gothic',
                'Hiragino Sans GB',
                'Impact',
                'Informal Roman',
                'IrisUPC',
                'Iskoola Pota',
                'JasmineUPC',
                'KacstOne',
                'KaiTi',
                'Kalinga',
                'Kartika',
                'Khmer UI',
                'Kino MT',
                'KodchiangUPC',
                'Kokila',
                'Kozuka Gothic Pr6N',
                'Lao UI',
                'Latha',
                'Leelawadee',
                'Levenim MT',
                'LilyUPC',
                'Lohit Gujarati',
                'Loma',
                'Lucida Bright',
                'Lucida Console',
                'Lucida Fax',
                'Lucida Sans Unicode',
                'MS Gothic',
                'MS Mincho',
                'MS PGothic',
                'MS PMincho',
                'MS Reference Sans Serif',
                'MS UI Gothic',
                'MV Boli',
                'Magneto',
                'Malgun Gothic',
                'Mangal',
                'Marlett',
                'Matura MT Script Capitals',
                'Meiryo UI',
                'Meiryo',
                'Menlo',
                'Microsoft Himalaya',
                'Microsoft JhengHei',
                'Microsoft New Tai Lue',
                'Microsoft PhagsPa',
                'Microsoft Sans Serif',
                'Microsoft Tai Le',
                'Microsoft Uighur',
                'Microsoft YaHei',
                'Microsoft Yi Baiti',
                'MingLiU',
                'MingLiU-ExtB',
                'MingLiU_HKSCS',
                'MingLiU_HKSCS-ExtB',
                'Miriam Fixed',
                'Miriam',
                'Mongolian Baiti',
                'MoolBoran',
                'NSimSun',
                'Narkisim',
                'News Gothic MT',
                'Niagara Solid',
                'Nyala',
                'PMingLiU',
                'PMingLiU-ExtB',
                'Palace Script MT',
                'Palatino Linotype',
                'Papyrus',
                'Perpetua',
                'Plantagenet Cherokee',
                'Playbill',
                'Prelude Bold',
                'Prelude Condensed Bold',
                'Prelude Condensed Medium',
                'Prelude Medium',
                'PreludeCompressedWGL Black',
                'PreludeCompressedWGL Bold',
                'PreludeCompressedWGL Light',
                'PreludeCompressedWGL Medium',
                'PreludeCondensedWGL Black',
                'PreludeCondensedWGL Bold',
                'PreludeCondensedWGL Light',
                'PreludeCondensedWGL Medium',
                'PreludeWGL Black',
                'PreludeWGL Bold',
                'PreludeWGL Light',
                'PreludeWGL Medium',
                'Raavi',
                'Rachana',
                'Rockwell',
                'Rod',
                'Sakkal Majalla',
                'Sawasdee',
                'Script MT Bold',
                'Segoe Print',
                'Segoe Script',
                'Segoe UI Light',
                'Segoe UI Semibold',
                'Segoe UI Symbol',
                'Segoe UI',
                'Shonar Bangla',
                'Showcard Gothic',
                'Shruti',
                'SimHei',
                'SimSun',
                'SimSun-ExtB',
                'Simplified Arabic Fixed',
                'Simplified Arabic',
                'Snap ITC',
                'Sylfaen',
                'Symbol',
                'Tahoma',
                'Times New Roman Baltic',
                'Times New Roman CE',
                'Times New Roman CYR',
                'Times New Roman Greek',
                'Times New Roman TUR',
                'Times New Roman',
                'TlwgMono',
                'Traditional Arabic',
                'Trebuchet MS',
                'Tunga',
                'Tw Cen MT Condensed Extra Bold',
                'Ubuntu',
                'Umpush',
                'Univers',
                'Utopia',
                'Utsaah',
                'Vani',
                'Verdana',
                'Vijaya',
                'Vladimir Script',
                'Vrinda',
                'Webdings',
                'Wide Latin',
                'Wingdings',
              ],
              t = '',
              i = 0;
            i < e.length;
            i++
          ) {
            r.detect(e[i]) && (t += i == e.length - 1 ? e[i] : e[i] + ', ')
          }
          return t
        },
        isLocalStorage: function () {
          try {
            return !!a.localStorage
          } catch (e) {
            return true
          }
        },
        isSessionStorage: function () {
          try {
            return !!a.sessionStorage
          } catch (e) {
            return true
          }
        },
        isCookie: function () {
          return navigator.cookieEnabled
        },
        getTimeZone: function () {
          var e, t
          return (
            (e = new Date()),
            (t = String(-e.getTimezoneOffset() / 60)) < 0
              ? '-' + ('0' + (t *= -1)).slice(-2)
              : '+' + ('0' + t).slice(-2)
          )
        },
        getLanguage: function () {
          return navigator.language
        },
        getSystemLanguage: function () {
          return navigator.systemLanguage || window.navigator.language
        },
        isCanvas: function () {
          var e = document.createElement('canvas')
          try {
            return !(!e.getContext || !e.getContext('2d'))
          } catch (t) {
            return false
          }
        },
        getCanvasPrint: function () {
          var e,
            t = document.createElement('canvas')
          try {
            e = t.getContext('2d')
          } catch (n) {
            return ''
          }
          return (
            (e.textBaseline = 'top'),
            (e.font = "14px 'Arial'"),
            (e.textBaseline = 'alphabetic'),
            (e.fillStyle = '#f60'),
            e.fillRect(125, 1, 62, 20),
            (e.fillStyle = '#069'),
            e.fillText('ClientJS,org <canvas> 1.0', 2, 15),
            (e.fillStyle = 'rgba(102, 204, 0, 0.7)'),
            e.fillText('ClientJS,org <canvas> 1.0', 4, 17),
            t.toDataURL()
          )
        },
      }
    },
    function (e, t, i) {
      'use strict'
      var n = i(2)
    },
    function (e, t, i) {
      'use strict'
      'undefined' != typeof self
        ? (e.exports = self)
        : 'undefined' != typeof window
        ? (e.exports = window)
        : (e.exports = Function('return this')())
    },
    function (e, t, i) {},
    function (e, t, i) {
      var n
      !(function (r, a) {
        'use strict'
        var F = function (e) {
            var t = {}
            for (var i in e) t[e[i].toUpperCase()] = e[i]
            return t
          },
          V = function (e, t) {
            return typeof e === 'string' && -1 !== D(t).indexOf(D(e))
          },
          D = function (e) {
            return e.toLowerCase()
          },
          J = function (e, t) {
            if (typeof e === 'string') {
              return (
                (e = e.replace(/^\s\s*/, '').replace(/\s\s*$/, '')),
                typeof t === 'undefined' ? e : e.substring(0, 255)
              )
            }
          },
          _ = function (e, t) {
            for (var i, n, r, s, u, c, d = 0; d < t.length && !u; ) {
              var p = t[d],
                f = t[d + 1]
              for (i = n = 0; i < p.length && !u; ) {
                if ((u = p[i++].exec(e))) {
                  for (r = 0; r < f.length; r++) {
                    c = u[++n]
                    typeof (s = f[r]) === 'object' && s.length > 0
                      ? 2 == s.length
                        ? typeof s[1] == 'function'
                          ? (this[s[0]] = s[1].call(this, c))
                          : (this[s[0]] = s[1])
                        : 3 == s.length
                        ? typeof s[1] !== 'function' || (s[1].exec && s[1].test)
                          ? (this[s[0]] = c ? c.replace(s[1], s[2]) : a)
                          : (this[s[0]] = c ? s[1].call(this, c, s[2]) : a)
                        : 4 == s.length &&
                          (this[s[0]] = c
                            ? s[3].call(this, c.replace(s[1], s[2]))
                            : a)
                      : (this[s] = c || a)
                  }
                }
              }
              d += 2
            }
          },
          G = function (e, t) {
            for (var i in t)
              if (typeof t[i] === 'object' && t[i].length > 0) {
                for (var n = 0; n < t[i].length; n++) {
                  if (V(t[i][n], e)) {
                    return '?' === i ? a : i
                  }
                }
              } else {
                if (V(t[i], e)) {
                  return '?' === i ? a : i
                }
              }
            return e
          },
          W = {
            ME: '4.90',
            'NT 3.11': 'NT3.51',
            'NT 4.0': 'NT4.0',
            2000: 'NT 5.0',
            XP: ['NT 5.1', 'NT 5.2'],
            Vista: 'NT 6.0',
            7: 'NT 6.1',
            8: 'NT 6.2',
            8.1: 'NT 6.3',
            10: ['NT 6.4', 'NT 10.0'],
            RT: 'ARM',
          },
          z = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              ['version', ['name', 'Chrome']],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              ['version', ['name', 'Edge']],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              ['name', 'version'],
              [/opios[\/ ]+([\w\.]+)/i],
              ['version', ['name', 'Opera Mini']],
              [/\bopr\/([\w\.]+)/i],
              ['version', ['name', 'Opera']],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              ['name', 'version'],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              ['version', ['name', 'UCBrowser']],
              [/\bqbcore\/([\w\.]+)/i],
              ['version', ['name', 'WeChat(Win) Desktop']],
              [/micromessenger\/([\w\.]+)/i],
              ['version', ['name', 'WeChat']],
              [/konqueror\/([\w\.]+)/i],
              ['version', ['name', 'Konqueror']],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              ['version', ['name', 'IE']],
              [/yabrowser\/([\w\.]+)/i],
              ['version', ['name', 'Yandex']],
              [/(avast|avg)\/([\w\.]+)/i],
              [['name', /(.+)/, '$1 Secure Browser'], 'version'],
              [/\bfocus\/([\w\.]+)/i],
              ['version', ['name', 'Firefox Focus']],
              [/\bopt\/([\w\.]+)/i],
              ['version', ['name', 'Opera Touch']],
              [/coc_coc\w+\/([\w\.]+)/i],
              ['version', ['name', 'Coc Coc']],
              [/dolfin\/([\w\.]+)/i],
              ['version', ['name', 'Dolphin']],
              [/coast\/([\w\.]+)/i],
              ['version', ['name', 'Opera Coast']],
              [/miuibrowser\/([\w\.]+)/i],
              ['version', ['name', 'MIUI Browser']],
              [/fxios\/([-\w\.]+)/i],
              ['version', ['name', 'Firefox']],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [['name', '360 Browser']],
              [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
              [['name', /(.+)/, '$1 Browser'], 'version'],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [['name', /_/g, ' '], 'version'],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              ['name', 'version'],
              [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
              ['name'],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [['name', 'Facebook'], 'version'],
              [
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              ['name', 'version'],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              ['version', ['name', 'GSA']],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              ['version', ['name', 'Chrome Headless']],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [['name', 'Chrome WebView'], 'version'],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              ['version', ['name', 'Android Browser']],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              ['name', 'version'],
              [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
              ['version', ['name', 'Mobile Safari']],
              [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
              ['version', 'name'],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                'name',
                [
                  'version',
                  G,
                  {
                    '1.0': '/8',
                    1.2: '/1',
                    1.3: '/3',
                    '2.0': '/412',
                    '2.0.2': '/416',
                    '2.0.3': '/417',
                    '2.0.4': '/419',
                    '?': '/',
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              ['name', 'version'],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [['name', 'Netscape'], 'version'],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              ['version', ['name', 'Firefox Reality']],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              ['name', 'version'],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [['architecture', 'amd64']],
              [/(ia32(?=;))/i],
              [['architecture', D]],
              [/((?:i[346]|x)86)[;\)]/i],
              [['architecture', 'ia32']],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [['architecture', 'arm64']],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [['architecture', 'armhf']],
              [/windows (ce|mobile); ppc;/i],
              [['architecture', 'arm']],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [['architecture', /ower/, '', D]],
              [/(sun4\w)[;\)]/i],
              [['architecture', 'sparc']],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [['architecture', D]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              ['model', ['vendor', 'Samsung'], ['type', 'tablet']],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              ['model', ['vendor', 'Samsung'], ['type', 'mobile']],
              [/\((ip(?:hone|od)[\w ]*);/i],
              ['model', ['vendor', 'Apple'], ['type', 'mobile']],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              ['model', ['vendor', 'Apple'], ['type', 'tablet']],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              ['model', ['vendor', 'Huawei'], ['type', 'tablet']],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
              ],
              ['model', ['vendor', 'Huawei'], ['type', 'mobile']],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                ['model', /_/g, ' '],
                ['vendor', 'Xiaomi'],
                ['type', 'mobile'],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                ['model', /_/g, ' '],
                ['vendor', 'Xiaomi'],
                ['type', 'tablet'],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
              ],
              ['model', ['vendor', 'OPPO'], ['type', 'mobile']],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              ['model', ['vendor', 'Vivo'], ['type', 'mobile']],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              ['model', ['vendor', 'Realme'], ['type', 'mobile']],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              ['model', ['vendor', 'Motorola'], ['type', 'mobile']],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              ['model', ['vendor', 'Motorola'], ['type', 'tablet']],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              ['model', ['vendor', 'LG'], ['type', 'tablet']],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              ['model', ['vendor', 'LG'], ['type', 'mobile']],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              ['model', ['vendor', 'Lenovo'], ['type', 'tablet']],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                ['model', /_/g, ' '],
                ['vendor', 'Nokia'],
                ['type', 'mobile'],
              ],
              [/(pixel c)\b/i],
              ['model', ['vendor', 'Google'], ['type', 'tablet']],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              ['model', ['vendor', 'Google'], ['type', 'mobile']],
              [
                /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              ['model', ['vendor', 'Sony'], ['type', 'mobile']],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                ['model', 'Xperia Tablet'],
                ['vendor', 'Sony'],
                ['type', 'tablet'],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              ['model', ['vendor', 'OnePlus'], ['type', 'mobile']],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              ['model', ['vendor', 'Amazon'], ['type', 'tablet']],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                ['model', /(.+)/g, 'Fire Phone $1'],
                ['vendor', 'Amazon'],
                ['type', 'mobile'],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              ['model', 'vendor', ['type', 'tablet']],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              ['model', ['vendor', 'BlackBerry'], ['type', 'mobile']],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              ['model', ['vendor', 'ASUS'], ['type', 'tablet']],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              ['model', ['vendor', 'ASUS'], ['type', 'mobile']],
              [/(nexus 9)/i],
              ['model', ['vendor', 'HTC'], ['type', 'tablet']],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
              ],
              ['vendor', ['model', /_/g, ' '], ['type', 'mobile']],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              ['model', ['vendor', 'Acer'], ['type', 'tablet']],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              ['model', ['vendor', 'Meizu'], ['type', 'mobile']],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              ['model', ['vendor', 'Sharp'], ['type', 'mobile']],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              ['vendor', 'model', ['type', 'mobile']],
              [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              ['vendor', 'model', ['type', 'tablet']],
              [/(surface duo)/i],
              ['model', ['vendor', 'Microsoft'], ['type', 'tablet']],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              ['model', ['vendor', 'Fairphone'], ['type', 'mobile']],
              [/(u304aa)/i],
              ['model', ['vendor', 'AT&T'], ['type', 'mobile']],
              [/\bsie-(\w*)/i],
              ['model', ['vendor', 'Siemens'], ['type', 'mobile']],
              [/\b(rct\w+) b/i],
              ['model', ['vendor', 'RCA'], ['type', 'tablet']],
              [/\b(venue[\d ]{2,7}) b/i],
              ['model', ['vendor', 'Dell'], ['type', 'tablet']],
              [/\b(q(?:mv|ta)\w+) b/i],
              ['model', ['vendor', 'Verizon'], ['type', 'tablet']],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              ['model', ['vendor', 'Barnes & Noble'], ['type', 'tablet']],
              [/\b(tm\d{3}\w+) b/i],
              ['model', ['vendor', 'NuVision'], ['type', 'tablet']],
              [/\b(k88) b/i],
              ['model', ['vendor', 'ZTE'], ['type', 'tablet']],
              [/\b(nx\d{3}j) b/i],
              ['model', ['vendor', 'ZTE'], ['type', 'mobile']],
              [/\b(gen\d{3}) b.+49h/i],
              ['model', ['vendor', 'Swiss'], ['type', 'mobile']],
              [/\b(zur\d{3}) b/i],
              ['model', ['vendor', 'Swiss'], ['type', 'tablet']],
              [/\b((zeki)?tb.*\b) b/i],
              ['model', ['vendor', 'Zeki'], ['type', 'tablet']],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [['vendor', 'Dragon Touch'], 'model', ['type', 'tablet']],
              [/\b(ns-?\w{0,9}) b/i],
              ['model', ['vendor', 'Insignia'], ['type', 'tablet']],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              ['model', ['vendor', 'NextBook'], ['type', 'tablet']],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [['vendor', 'Voice'], 'model', ['type', 'mobile']],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [['vendor', 'LvTel'], 'model', ['type', 'mobile']],
              [/\b(ph-1) /i],
              ['model', ['vendor', 'Essential'], ['type', 'mobile']],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              ['model', ['vendor', 'Envizen'], ['type', 'tablet']],
              [/\b(trio[-\w\. ]+) b/i],
              ['model', ['vendor', 'MachSpeed'], ['type', 'tablet']],
              [/\btu_(1491) b/i],
              ['model', ['vendor', 'Rotor'], ['type', 'tablet']],
              [/(shield[\w ]+) b/i],
              ['model', ['vendor', 'Nvidia'], ['type', 'tablet']],
              [/(sprint) (\w+)/i],
              ['vendor', 'model', ['type', 'mobile']],
              [/(kin\.[onetw]{3})/i],
              [
                ['model', /\./g, ' '],
                ['vendor', 'Microsoft'],
                ['type', 'mobile'],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              ['model', ['vendor', 'Zebra'], ['type', 'tablet']],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              ['model', ['vendor', 'Zebra'], ['type', 'mobile']],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              ['vendor', 'model', ['type', 'console']],
              [/droid.+; (shield) bui/i],
              ['model', ['vendor', 'Nvidia'], ['type', 'console']],
              [/(playstation [345portablevi]+)/i],
              ['model', ['vendor', 'Sony'], ['type', 'console']],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              ['model', ['vendor', 'Microsoft'], ['type', 'console']],
              [/smart-tv.+(samsung)/i],
              ['vendor', ['type', 'smarttv']],
              [/hbbtv.+maple;(\d+)/i],
              [
                ['model', /^/, 'SmartTV'],
                ['vendor', 'Samsung'],
                ['type', 'smarttv'],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                ['vendor', 'LG'],
                ['type', 'smarttv'],
              ],
              [/(apple) ?tv/i],
              ['vendor', ['model', 'Apple TV'], ['type', 'smarttv']],
              [/crkey/i],
              [
                ['model', 'Chromecast'],
                ['vendor', 'Google'],
                ['type', 'smarttv'],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              ['model', ['vendor', 'Amazon'], ['type', 'smarttv']],
              [/\(dtv[\);].+(aquos)/i],
              ['model', ['vendor', 'Sharp'], ['type', 'smarttv']],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
              ],
              [
                ['vendor', J],
                ['model', J],
                ['type', 'smarttv'],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [['type', 'smarttv']],
              [/((pebble))app/i],
              ['vendor', 'model', ['type', 'wearable']],
              [/droid.+; (glass) \d/i],
              ['model', ['vendor', 'Google'], ['type', 'wearable']],
              [/droid.+; (wt63?0{2,3})\)/i],
              ['model', ['vendor', 'Zebra'], ['type', 'wearable']],
              [/(quest( 2)?)/i],
              ['model', ['vendor', 'Facebook'], ['type', 'wearable']],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              ['vendor', ['type', 'embedded']],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              ['model', ['type', 'mobile']],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              ['model', ['type', 'tablet']],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [['type', 'tablet']],
              [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
              [['type', 'mobile']],
              [/(android[-\w\. ]{0,9});.+buil/i],
              ['model', ['vendor', 'Generic']],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              ['version', ['name', 'EdgeHTML']],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              ['version', ['name', 'Blink']],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
              ],
              ['name', 'version'],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              ['version', 'name'],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              ['name', 'version'],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              ['name', ['version', G, W]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                ['name', 'Windows'],
                ['version', G, W],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                ['version', /_/g, '.'],
                ['name', 'iOS'],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                ['name', 'Mac OS'],
                ['version', /_/g, '.'],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
              ['version', 'name'],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              ['name', 'version'],
              [/\(bb(10);/i],
              ['version', ['name', 'BlackBerry']],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              ['version', ['name', 'Symbian']],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              ['version', ['name', 'Firefox OS']],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              ['version', ['name', 'webOS']],
              [/crkey\/([\d\.]+)/i],
              ['version', ['name', 'Chromecast']],
              [/(cros) [\w]+ ([\w\.]+\w)/i],
              [['name', 'Chromium OS'], 'version'],
              [
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              ['name', 'version'],
              [/(sunos) ?([\w\.\d]*)/i],
              [['name', 'Solaris'], 'version'],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              ['name', 'version'],
            ],
          },
          q = function (e, t) {
            if (
              (typeof e === 'object' && ((t = e), (e = a)),
              !(this instanceof q))
            ) {
              return new q(e, t).getResult()
            }
            var i =
                e ||
                (typeof r !== 'undefined' &&
                r.navigator &&
                r.navigator.userAgent
                  ? r.navigator.userAgent
                  : ''),
              n = t
                ? (function (e, t) {
                    var i = {
                      innerHTML: 'mmmmmmmmmmlli',
                      prototype: t.prototype,
                      r: Number(i[r]),
                    }
                    for (var n in e)
                      t[n] && t[n].length % 2 == 0
                        ? (i[n] = t[n].concat(e[n]))
                        : (i[n] = e[n])
                    return i
                  })(z, t)
                : z
            return (
              (this.getBrowser = function () {
                var e,
                  t = {}
                return (
                  (t.name = a),
                  (t.version = a),
                  _.call(t, i, n.browser),
                  (t.major =
                    typeof (e = t.version) === 'string'
                      ? e.replace(/[^\d\.]/g, '').split('.')[0]
                      : a),
                  t
                )
              }),
              (this.getCPU = function () {
                var e = {
                  exports: function () {
                    return 'object' == typeof global &&
                      global &&
                      global.Math === Math &&
                      global.Array === Array
                      ? global
                      : n
                  },
                  exports: function (e, t) {
                    var i, n, r, a, o, s, l, u
                    for (
                      i = 3 & e.length,
                        n = e.length - i,
                        r = t,
                        o = 3432918353,
                        s = 461845907,
                        u = 0;
                      u < n;

                    ) {
                      l =
                        (255 & e.charCodeAt(u)) |
                        ((255 & e.charCodeAt(++u)) << 8) |
                        ((255 & e.charCodeAt(++u)) << 16) |
                        ((255 & e.charCodeAt(++u)) << 24)
                      ++u
                      r =
                        27492 +
                        (65535 &
                          (a =
                            (5 *
                              (65535 &
                                (r =
                                  ((r ^= l =
                                    ((65535 &
                                      (l =
                                        ((l =
                                          ((65535 & l) * o +
                                            ((((l >>> 16) * o) & 65535) <<
                                              16)) &
                                          4294967295) <<
                                          15) |
                                        (l >>> 17))) *
                                      s +
                                      ((((l >>> 16) * s) & 65535) << 16)) &
                                    4294967295) <<
                                    13) |
                                  (r >>> 19))) +
                              (((5 * (r >>> 16)) & 65535) << 16)) &
                            4294967295)) +
                        (((58964 + (a >>> 16)) & 65535) << 16)
                    }
                    switch (((l = 0), i)) {
                      case 3:
                        l ^= (255 & e.charCodeAt(u + 2)) << 16
                      case 2:
                        l ^= (255 & e.charCodeAt(u + 1)) << 8
                      case 1:
                        r ^= l =
                          ((65535 &
                            (l =
                              ((l =
                                ((65535 & (l ^= 255 & e.charCodeAt(u))) * o +
                                  ((((l >>> 16) * o) & 65535) << 16)) &
                                4294967295) <<
                                15) |
                              (l >>> 17))) *
                            s +
                            ((((l >>> 16) * s) & 65535) << 16)) &
                          4294967295
                    }
                    return (
                      (r ^= e.length),
                      (r =
                        (2246822507 * (65535 & (r ^= r >>> 16)) +
                          (((2246822507 * (r >>> 16)) & 65535) << 16)) &
                        4294967295),
                      (r =
                        (3266489909 * (65535 & (r ^= r >>> 13)) +
                          (((3266489909 * (r >>> 16)) & 65535) << 16)) &
                        4294967295),
                      (r ^= r >>> 16) >>> 0
                    )
                  },
                  exports: t,
                  exports: function () {
                    var e = ['monospace', 'sans-serif', 'serif'],
                      t = document.getElementsByTagName('body')[0],
                      i = document.createElement('span')
                    i.style.fontSize = '72px'
                    var n = {},
                      r = {}
                    for (var a in e)
                      (i.style.fontFamily = e[a]),
                        t.appendChild(i),
                        (n[e[a]] = i.offsetWidth),
                        (r[e[a]] = i.offsetHeight),
                        t.removeChild(i)
                    this.detect = function (a) {
                      var o = false
                      for (var s in e) {
                        i.style.fontFamily = a + ',' + e[s]
                        t.appendChild(i)
                        var l =
                          i.offsetWidth != n[e[s]] || i.offsetHeight != r[e[s]]
                        t.removeChild(i)
                        o = o || l
                      }
                      return o
                    }
                  },
                  super_: t,
                  prototype: new i(),
                  exports: function () {
                    return n.getJREs().toString()
                  },
                  i: t.get(i).version,
                  exports: f,
                  exports: function () {
                    if (this.isFlash()) {
                      var e = n.getFlashPlayerVersion()
                      return e.major + '.' + e.minor + '.' + e.release
                    }
                    return ''
                  },
                  id: 'SWFObjectExprInst',
                  exports: H,
                }
                return (e.architecture = a), _.call(e, i, n.cpu), e
              }),
              (this.getDevice = function () {
                var e = {}
                return (
                  (e.vendor = a),
                  (e.model = a),
                  (e.type = a),
                  _.call(e, i, n.device),
                  e
                )
              }),
              (this.getEngine = function () {
                var e = {}
                return (e.name = a), (e.version = a), _.call(e, i, n.engine), e
              }),
              (this.getOS = function () {
                var e = {}
                return (e.name = a), (e.version = a), _.call(e, i, n.os), e
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                }
              }),
              (this.getUA = function () {
                return i
              }),
              (this.setUA = function (e) {
                return (
                  (i = typeof e === 'string' && e.length > 255 ? J(e, 255) : e),
                  this
                )
              }),
              this.setUA(i),
              this
            )
          }
        q.VERSION = '0.7.30'
        q.BROWSER = F(['name', 'version', 'major'])
        q.CPU = F(['architecture'])
        q.DEVICE = F([
          'model',
          'vendor',
          'type',
          'console',
          'mobile',
          'smarttv',
          'tablet',
          'wearable',
          'embedded',
        ])
        q.ENGINE = q.OS = F(['name', 'version'])
        typeof t !== 'undefined'
          ? (typeof e !== 'undefined' && e.exports && (t = e.exports = q),
            (t.UAParser = q))
          : i(5)
          ? (n = function () {
              return q
            }.call(t, i, t, e)) === a || (e.exports = n)
          : typeof r !== 'undefined' && (r.UAParser = q)
        var H = typeof r !== 'undefined' && (r.jQuery || r.Zepto)
        if (H && !H.ua) {
          var X = new q()
          H.ua = X.getResult()
          H.ua.get = function () {
            return X.getUA()
          }
          H.ua.set = function (e) {
            X.setUA(e)
            var t = X.getResult()
            for (var i in t) H.ua[i] = t[i]
          }
        }
      })('object' == typeof window ? window : this)
    },
    function (e, t) {
      ;(function (t) {}.call(this, {}))
    },
    function (e, t) {},
    function (e, t) {
      'function' == typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              })))
          })
        : (e.exports = function (e, t) {
            if (t) {
              var i = function () {}
              e.prototype.constructor = e
            }
          })
    },
    function (e, t, i) {
      'use strict'
      var n = i(9)
    },
    function (e, t, i) {
      'use strict'
      var r = '^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:[_\\.](\\d+))?)?)?$',
        a = '^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:[_\\.](\\d+))?)?)?(\\*|\\+)?$',
        o = {
          core: ['id', 'class', 'title', 'style'],
          applet: [
            'codebase',
            'code',
            'name',
            'archive',
            'object',
            'width',
            'height',
            'alt',
            'align',
            'hspace',
            'vspace',
          ],
        },
        s = o.applet.concat(o.core)
      function l(e) {
        f.debug && (console.log ? console.log(e) : alert(e))
      }
      function u(e, t) {
        var i = 0,
          n = e.match(a)
        if (null != n) {
          if (t) {
            return true
          }
          for (
            var r = false, o = false, s = new Array(), u = 1;
            u < n.length;
            ++u
          ) {
            'string' == typeof n[u] && '' != n[u] && ((s[i] = n[u]), i++)
          }
          '+' == s[s.length - 1]
            ? ((o = true), (r = false), s.length--)
            : '*' == s[s.length - 1]
            ? ((o = false), (r = true), s.length--)
            : s.length < 4 && ((o = false), (r = true))
          for (var c = f.getJREs(), d = 0; d < c.length; ++d) {
            if (f.compareVersionToPattern(c[d], s, r, o)) {
              return true
            }
          }
          return false
        }
        var p = 'Invalid versionPattern passed to versionCheck: ' + e
        return l('[versionCheck()] ' + p), alert(p), false
      }
      function c(e) {
        document.location =
          'jnlp:' +
          (function (e) {
            var t
            if (
              (function (e) {
                for (
                  var t = ['http://', 'https://', 'file://'], i = 0;
                  i < t.length;
                  i++
                ) {
                  if (e.toLowerCase().startsWith(t[i])) {
                    return true
                  }
                }
                return false
              })(e)
            ) {
              t = e
            } else {
              var i = window.location.href,
                n = i.lastIndexOf('/')
              t = (n > -1 ? i.substring(0, n + 1) : i + '/') + e
            }
            return t
          })(e)
      }
      function d() {
        return (
          'Edge' == f.getBrowser() ||
          'Chrome' == f.browserName2 ||
          ('FirefoxNoPlugin' == f.browserName2 && !u('1.8*', false)) ||
          'NoActiveX' == f.browserName2
        )
      }
      function p(e) {
        return null == e || 0 == e.length
          ? 'https://java.com/dt-redirect'
          : ('&' == e.charAt(0) && (e = e.substring(1, e.length)),
            'https://java.com/dt-redirect?' + e)
      }
      'function' != typeof String.prototype.startsWith &&
        (String.prototype.startsWith = function (e, t) {
          return (t = t || 0), this.indexOf(e, t) === t
        })
      var f = {
        debug: null,
        version: '20120801',
        firefoxJavaVersion: null,
        useStaticMimeType: false,
        myInterval: null,
        preInstallJREList: null,
        brand: null,
        locale: null,
        installType: null,
        EAInstallEnabled: false,
        EarlyAccessURL: null,
        oldMimeType:
          'application/npruntime-scriptable-plugin;DeploymentToolkit',
        mimeType: 'application/java-deployment-toolkit',
        launchButtonPNG: (function () {
          try {
            return -1 != document.location.protocol.indexOf('http')
              ? '//java.com/js/webstart.png'
              : 'https://java.com/js/webstart.png'
          } catch (t) {
            return 'https://java.com/js/webstart.png'
          }
        })(),
        browserName: null,
        browserName2: null,
        getJREs: function () {
          var e = new Array()
          if (this.isPluginInstalled()) {
            for (
              var t = this.getPlugin().jvms, i = 0;
              i < t.getLength();
              i++
            ) {}
          } else {
            var n = this.getBrowser()
            'MSIE' == n
              ? this.testUsingActiveX('9')
                ? (e[0] = '9')
                : this.testUsingActiveX('1.8.0')
                ? (e[0] = '1.8.0')
                : this.testUsingActiveX('1.7.0')
                ? (e[0] = '1.7.0')
                : this.testUsingActiveX('1.6.0')
                ? (e[0] = '1.6.0')
                : this.testUsingActiveX('1.5.0')
                ? (e[0] = '1.5.0')
                : this.testUsingActiveX('1.4.2')
                ? (e[0] = '1.4.2')
                : this.testForMSVM() && (e[0] = '1.1')
              : 'Netscape Family' == n &&
                (this.getJPIVersionUsingMimeType(),
                null != this.firefoxJavaVersion
                  ? (e[0] = this.firefoxJavaVersion)
                  : this.testUsingMimeTypes('9')
                  ? (e[0] = '9')
                  : this.testUsingMimeTypes('1.8')
                  ? (e[0] = '1.8.0')
                  : this.testUsingMimeTypes('1.7')
                  ? (e[0] = '1.7.0')
                  : this.testUsingMimeTypes('1.6')
                  ? (e[0] = '1.6.0')
                  : this.testUsingMimeTypes('1.5')
                  ? (e[0] = '1.5.0')
                  : this.testUsingMimeTypes('1.4.2')
                  ? (e[0] = '1.4.2')
                  : 'Safari' == this.browserName2 &&
                    (this.testUsingPluginsArray('9')
                      ? (e[0] = '9')
                      : this.testUsingPluginsArray('1.8')
                      ? (e[0] = '1.8.0')
                      : this.testUsingPluginsArray('1.7')
                      ? (e[0] = '1.7.0')
                      : this.testUsingPluginsArray('1.6')
                      ? (e[0] = '1.6.0')
                      : this.testUsingPluginsArray('1.5')
                      ? (e[0] = '1.5.0')
                      : this.testUsingPluginsArray('1.4.2') &&
                        (e[0] = '1.4.2')))
          }
          if (this.debug) {
            for (var r = 0; r < e.length; ++r) {
              l('[getJREs()] We claim to have detected Java SE ' + e[r])
            }
          }
          return e
        },
        installJRE: function (e) {
          return (
            l(
              'The Deployment Toolkit installJRE()  method no longer installs JRE. It just checks if the requested version of JRE is installed and calls installLatestJRE() otherwise. More Information on usage of the Deployment Toolkit can be found in the Deployment Guide at https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/'
            ),
            ('undefined' != e && null != e) || (e = '1.1'),
            null == e.match(a) &&
              (l('Invalid requestVersion argument to installJRE(): ' + e),
              (e = '1.6')),
            !!this.versionCheck(e) || this.installLatestJRE()
          )
        },
        isAutoInstallEnabled: function (e) {
          return (
            !!this.isPluginInstalled() &&
            (void 0 === e && (e = null),
            (function (e) {
              return (
                'MSIE' != f.browserName ||
                !!f.compareVersionToPattern(
                  f.getPlugin().version,
                  ['10', '0', '0'],
                  false,
                  true
                ) ||
                (null != e &&
                  !(function (e, t) {
                    if (null == e || 0 == e.length) {
                      return true
                    }
                    var i = e.charAt(e.length - 1)
                    if (
                      ('+' != i &&
                        '*' != i &&
                        -1 != e.indexOf('_') &&
                        '_' != i &&
                        ((e += '*'), (i = '*')),
                      (e = e.substring(0, e.length - 1)).length > 0)
                    ) {
                      var n = e.charAt(e.length - 1)
                      ;('.' != n && '_' != n) ||
                        (e = e.substring(0, e.length - 1))
                    }
                    return '*' == i ? 0 == t.indexOf(e) : '+' == i && e <= t
                  })('1.6.0_33+', e))
              )
            })(e))
          )
        },
        isCallbackSupported: function () {
          return (
            this.isPluginInstalled() &&
            this.compareVersionToPattern(
              this.getPlugin().version,
              ['10', '2', '0'],
              false,
              true
            )
          )
        },
        installLatestJRE: function () {
          if (
            (l(
              "The Deployment Toolkit installLatestJRE() method no longer installs JRE. If user's version of Java is below the security baseline it redirects user to java.com to get an updated JRE. More Information on usage of the Deployment Toolkit can be found in the Deployment Guide at ://docs.oracle.com/javase/8/docs/technotes/guides/deploy/"
            ),
            !this.isPluginInstalled() || !this.getPlugin().installLatestJRE())
          ) {
            var e = this.getBrowser(),
              t = navigator.platform.toLowerCase()
            return 'MSIE' == e
              ? this.IEInstall()
              : 'Netscape Family' == e && -1 != t.indexOf('win32')
              ? this.FFInstall()
              : ((location.href = p(
                  (null != this.locale ? '&locale=' + this.locale : '') +
                    (null != this.brand ? '&brand=' + this.brand : '')
                )),
                false)
          }
          return true
        },
        runApplet: function (e, t, i) {
          if (
            (('undefined' != i && null != i) || (i = '1.1'), null != i.match(r))
          ) {
            if ('?' != this.getBrowser()) {
              if (d()) {
                var n = setInterval(function () {
                  var e
                  'complete' == document.readyState &&
                    (clearInterval(n),
                    ((e = document.createElement('div')).id = 'messagebox'),
                    e.setAttribute(
                      'style',
                      'background-color: #ffffce;text-align: left;border: solid 1px #f0c000; padding: 1.65em 1.65em .75em 0.5em; font-family: Helvetica, Arial, sans-serif; font-size: 75%; bottom:0; left:0; right:0; position:fixed; margin:auto; opacity:0.9; width:400px;'
                    ),
                    (e.innerHTML =
                      '<span style="margin-left:10px;font-weight:bold;float:right;font-size:22px;line-height:20px;cursor:pointer;color:red;" onclick="this.parentElement.style.display=\'none\';">&times;</span><img src="https://java.com/js/alert_16.png"><div style="border: .85px; margin:-2.2em 0 0.55em 2.5em;"><p>Java Plug-in is not supported by this browser. <a href="https://java.com/dt-redirect">More info</a></p>'),
                    document.body.appendChild(e))
                }, 15)
                return void l(
                  '[runApplet()] Java Plug-in is not supported by this browser'
                )
              }
              ;(this.versionCheck(i + '+') || this.installJRE(i + '+')) &&
                this.writeAppletTag(e, t)
            } else {
              this.writeAppletTag(e, t)
            }
          } else {
            l(
              '[runApplet()] Invalid minimumVersion argument to runApplet():' +
                i
            )
          }
        },
        writeAppletTag: function (e, t) {
          var i = '<applet ',
            n = '',
            r = true
          for (var a in ((null != t && 'object' == typeof t) ||
            (t = new Object()),
          e))
            (function (e, t) {
              for (var i = e.length, n = 0; n < i; n++) {
                if (e[n] === t) {
                  return true
                }
              }
              return false
            })(s, a.toLowerCase())
              ? ((i += ' ' + a + '="' + e[a] + '"'), 'code' == a && (r = false))
              : (t[a] = e[a])
          var o = false
          for (var l in t)
            'codebase_lookup' == l && (o = true),
              ('object' != l && 'java_object' != l && 'java_code' != l) ||
                (r = false),
              (n += '<param name="' + l + '" value="' + t[l] + '"/>')
          o || (n += '<param name="codebase_lookup" value="false"/>')
          r && (i += ' code="dummy"')
          i += '>'
          document.write(i + '\n' + n + '\n</applet>')
        },
        versionCheck: function (e) {
          return u(e, d())
        },
        isWebStartInstalled: function (e) {
          if (d()) {
            return true
          }
          if ('?' == this.getBrowser()) {
            return true
          }
          ;('undefined' != e && null != e) || (e = '1.4.2')
          var t = false
          return (
            null != e.match(r)
              ? (t = this.versionCheck(e + '+'))
              : (l(
                  '[isWebStartInstaller()] Invalid minimumVersion argument to isWebStartInstalled(): ' +
                    e
                ),
                (t = this.versionCheck('1.4.2+'))),
            t
          )
        },
        getJPIVersionUsingMimeType: function () {
          var e, t
          for (e = 0; e < navigator.mimeTypes.length; ++e) {
            if (
              null !=
              (t = navigator.mimeTypes[e].type.match(
                /^application\/x-java-applet;jpi-version=(.*)$/
              ))
            ) {
              return (
                (this.firefoxJavaVersion = t[1]),
                void (this.useStaticMimeType = true)
              )
            }
          }
          for (e = 0; e < navigator.mimeTypes.length; ++e) {
            null !=
              (t = navigator.mimeTypes[e].type.match(
                /^application\/x-java-applet;version=(.*)$/
              )) &&
              (null == this.firefoxJavaVersion ||
                this.compareVersions(t[1], this.firefoxJavaVersion)) &&
              (this.firefoxJavaVersion = t[1])
          }
        },
        launchWebStartApplication: function (e) {
          if ((this.getJPIVersionUsingMimeType(), 0 == u('1.7.0+', false))) {
            if (d()) {
              c(e)
            } else {
              if (
                0 == this.installJRE('1.7.0+') ||
                0 == this.isWebStartInstalled('1.7.0')
              ) {
                return false
              }
            }
          }
          var t = null
          document.documentURI && (t = document.documentURI)
          null == t && (t = document.URL)
          var i,
            n = this.getBrowser()
          if (
            ('MSIE' == n
              ? (i =
                  '<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" width="0" height="0"><PARAM name="launchjnlp" value="' +
                  e +
                  '"><PARAM name="docbase" value="' +
                  encodeURIComponent(t) +
                  '"></object>')
              : 'Netscape Family' == n &&
                (i =
                  '<embed type="' +
                  (this.useStaticMimeType
                    ? 'application/x-java-applet;jpi-version='
                    : 'application/x-java-applet;version=') +
                  this.firefoxJavaVersion +
                  '" width="0" height="0" launchjnlp="' +
                  e +
                  '"docbase="' +
                  encodeURIComponent(t) +
                  '" />'),
            'undefined' == document.body || null == document.body)
          ) {
            document.write(i)
            document.location = t
          } else {
            var r = document.createElement('div')
            r.id = 'div1'
            r.style.position = 'relative'
            r.style.left = '-10000px'
            r.style.margin = '0px auto'
            r.className = 'dynamicDiv'
            r.innerHTML = i
            document.body.appendChild(r)
          }
        },
        createWebStartLaunchButtonEx: function (e) {
          var t =
            "javascript:deployJava.launchWebStartApplication('" + e + "');"
          document.write(
            '<a href="' +
              t +
              '" onMouseOver="window.status=\'\'; return true;"><img src="' +
              this.launchButtonPNG +
              '" border="0" /></a>'
          )
        },
        createWebStartLaunchButton: function (e, t) {
          var i =
            'javascript:if (!deployJava.isWebStartInstalled(&quot;' +
            t +
            '&quot;)) {if (deployJava.installLatestJRE()) {if (deployJava.launch(&quot;' +
            e +
            '&quot;)) {}}} else {if (deployJava.launch(&quot;' +
            e +
            '&quot;)) {}}'
          document.write(
            '<a href="' +
              i +
              '" onMouseOver="window.status=\'\'; return true;"><img src="' +
              this.launchButtonPNG +
              '" border="0" /></a>'
          )
        },
        launch: function (e) {
          return (document.location = e), true
        },
        launchEx: function (e) {
          return c(e), true
        },
        isPluginInstalled: function () {
          var e = this.getPlugin()
          return !(!e || !e.jvms)
        },
        isAutoUpdateEnabled: function () {
          return (
            !!this.isPluginInstalled() && this.getPlugin().isAutoUpdateEnabled()
          )
        },
        setAutoUpdateEnabled: function () {
          return (
            !!this.isPluginInstalled() &&
            this.getPlugin().setAutoUpdateEnabled()
          )
        },
        setInstallerType: function (e) {
          return (
            l(
              'The Deployment Toolkit no longer installs JRE. Method setInstallerType() is no-op. More Information on usage of the Deployment Toolkit can be found in the Deployment Guide at ://docs.oracle.com/javase/8/docs/technotes/guides/deploy/'
            ),
            false
          )
        },
        setAdditionalPackages: function (e) {
          return (
            l(
              'The Deployment Toolkit no longer installs JRE. Method setAdditionalPackages() is no-op. More Information on usage of the Deployment Toolkit can be found in the Deployment Guide at ://docs.oracle.com/javase/8/docs/technotes/guides/deploy/'
            ),
            false
          )
        },
        setEarlyAccess: function (e) {
          this.EAInstallEnabled = e
        },
        isPlugin2: function () {
          if (this.isPluginInstalled() && this.versionCheck('1.6.0_10+')) {
            try {
              return this.getPlugin().isPlugin2()
            } catch (e) {}
          }
          return false
        },
        allowPlugin: function () {
          return (
            this.getBrowser(),
            'Safari' != this.browserName2 && 'Opera' != this.browserName2
          )
        },
        getPlugin: function () {
          this.refresh()
          var e = null
          return (
            this.allowPlugin() &&
              (e = document.getElementById('deployJavaPlugin')),
            e
          )
        },
        compareVersionToPattern: function (e, t, i, n) {
          if (e == undefined || t == undefined) {
            return false
          }
          var a = e.match(r)
          if (null != a) {
            for (var o = 0, s = new Array(), l = 1; l < a.length; ++l) {
              'string' == typeof a[l] && '' != a[l] && ((s[o] = a[l]), o++)
            }
            var u = Math.min(s.length, t.length)
            if (n) {
              for (var c = 0; c < u; ++c) {
                var d = parseInt(s[c]),
                  p = parseInt(t[c])
                if (d < p) {
                  return false
                }
                if (d > p) {
                  return true
                }
              }
              return true
            }
            for (var f = 0; f < u; ++f) {
              if (s[f] != t[f]) {
                return false
              }
            }
            return !!i || s.length == t.length
          }
          return false
        },
        getBrowser: function () {
          if (null == this.browserName) {
            var e = navigator.userAgent.toLowerCase()
            if (
              (l('[getBrowser()] navigator.userAgent.toLowerCase() -> ' + e),
              -1 != e.indexOf('edge'))
            ) {
              this.browserName = 'Edge'
              this.browserName2 = 'Edge'
            } else {
              if (-1 != e.indexOf('msie') && -1 == e.indexOf('opera')) {
                this.browserName = 'MSIE'
                this.browserName2 = 'MSIE'
              } else {
                if (-1 != e.indexOf('trident') || -1 != e.indexOf('Trident')) {
                  if (
                    ((this.browserName = 'MSIE'),
                    (this.browserName2 = 'MSIE'),
                    -1 != e.indexOf('windows nt 6.3') ||
                      -1 != e.indexOf('windows nt 6.2'))
                  ) {
                    try {
                      new ActiveXObject('htmlfile')
                    } catch (t) {
                      this.browserName2 = 'NoActiveX'
                    }
                  }
                } else {
                  ;-1 != e.indexOf('iphone')
                    ? ((this.browserName = 'Netscape Family'),
                      (this.browserName2 = 'iPhone'))
                    : -1 != e.indexOf('firefox') && -1 == e.indexOf('opera')
                    ? ((this.browserName = 'Netscape Family'),
                      this.isPluginInstalled()
                        ? (this.browserName2 = 'Firefox')
                        : (this.browserName2 = 'FirefoxNoPlugin'))
                    : -1 != e.indexOf('chrome')
                    ? ((this.browserName = 'Netscape Family'),
                      (this.browserName2 = 'Chrome'))
                    : -1 != e.indexOf('safari')
                    ? ((this.browserName = 'Netscape Family'),
                      (this.browserName2 = 'Safari'))
                    : -1 != e.indexOf('mozilla') && -1 == e.indexOf('opera')
                    ? ((this.browserName = 'Netscape Family'),
                      (this.browserName2 = 'Other'))
                    : -1 != e.indexOf('opera')
                    ? ((this.browserName = 'Netscape Family'),
                      (this.browserName2 = 'Opera'))
                    : ((this.browserName = '?'),
                      (this.browserName2 = 'unknown'))
                }
              }
            }
            l(
              '[getBrowser()] Detected browser name:' +
                this.browserName +
                ', ' +
                this.browserName2
            )
          }
          return this.browserName
        },
        testUsingActiveX: function (e) {
          var t = 'JavaWebStart.isInstalled.' + e + '.0'
          if ('undefined' == typeof ActiveXObject || !ActiveXObject) {
            return (
              l(
                '[testUsingActiveX()] Browser claims to be IE, but no ActiveXObject object?'
              ),
              false
            )
          }
          try {
            return null != new ActiveXObject(t)
          } catch (i) {
            return false
          }
        },
        testForMSVM: function () {
          if ('undefined' != typeof oClientCaps) {
            var e = oClientCaps.getComponentVersion(
              '{08B0E5C0-4FCB-11CF-AAA5-00401C608500}',
              'ComponentID'
            )
            return '' != e && '5,0,5000,0' != e
          }
          return false
        },
        testUsingMimeTypes: function (e) {
          if (!navigator.mimeTypes) {
            return (
              l(
                '[testUsingMimeTypes()] Browser claims to be Netscape family, but no mimeTypes[] array?'
              ),
              false
            )
          }
          for (var t = 0; t < navigator.mimeTypes.length; ++t) {
            var i = navigator.mimeTypes[t].type.match(
              /^application\/x-java-applet\x3Bversion=(1\.8|1\.7|1\.6|1\.5|1\.4\.2)$/
            )
            if (null != i && this.compareVersions(i[1], e)) {
              return true
            }
          }
          return false
        },
        testUsingPluginsArray: function (e) {
          if (!navigator.plugins || !navigator.plugins.length) {
            return false
          }
          for (
            var t = navigator.platform.toLowerCase(), i = 0;
            i < navigator.plugins.length;
            ++i
          ) {
            var n = navigator.plugins[i].description
            if (-1 != n.search(/^Java Switchable Plug-in (Cocoa)/)) {
              if (this.compareVersions('1.5.0', e)) {
                return true
              }
            } else {
              if (
                -1 != n.search(/^Java/) &&
                -1 != t.indexOf('win') &&
                (this.compareVersions('1.5.0', e) ||
                  this.compareVersions('1.6.0', e))
              ) {
                return true
              }
            }
          }
          return !!this.compareVersions('1.5.0', e)
        },
        IEInstall: function () {
          return (
            (location.href = p(
              (null != this.locale ? '&locale=' + this.locale : '') +
                (null != this.brand ? '&brand=' + this.brand : '')
            )),
            false
          )
        },
        done: function (e, t) {},
        FFInstall: function () {
          return (
            (location.href = p(
              (null != this.locale ? '&locale=' + this.locale : '') +
                (null != this.brand ? '&brand=' + this.brand : '') +
                (null != this.installType ? '&type=' + this.installType : '')
            )),
            false
          )
        },
        compareVersions: function (e, t) {
          for (
            var i = e.split('.'), n = t.split('.'), r = 0;
            r < i.length;
            ++r
          ) {}
          for (var a = 0; a < n.length; ++a) {
            n[a] = Number(n[a])
          }
          return (
            2 == i.length && (i[2] = 0),
            i[0] > n[0] ||
              (!(i[0] < n[0]) &&
                (i[1] > n[1] ||
                  (!(i[1] < n[1]) && (i[2] > n[2] || !(i[2] < n[2])))))
          )
        },
        enableAlerts: function () {
          this.browserName = null
          this.debug = true
        },
        poll: function () {
          this.refresh()
          var e = this.getJREs()
          0 == this.preInstallJREList.length &&
            0 != e.length &&
            clearInterval(this.myInterval)
          0 != this.preInstallJREList.length &&
            0 != e.length &&
            this.preInstallJREList[0] != e[0] &&
            clearInterval(this.myInterval)
        },
        writePluginTag: function () {
          var e = this.getBrowser()
          'MSIE' == e
            ? document.write(
                '<object classid="clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA" id="deployJavaPlugin" width="0" height="0"></object>'
              )
            : 'Netscape Family' == e &&
              this.allowPlugin() &&
              this.writeEmbedTag()
        },
        refresh: function () {
          ;(navigator.plugins.refresh(false),
          'Netscape Family' == this.getBrowser() && this.allowPlugin()) &&
            null == document.getElementById('deployJavaPlugin') &&
              this.writeEmbedTag()
        },
        writeEmbedTag: function () {
          var e = false
          if (null != navigator.mimeTypes) {
            for (var t = 0; t < navigator.mimeTypes.length; t++) {
              navigator.mimeTypes[t].type == this.mimeType &&
                navigator.mimeTypes[t].enabledPlugin &&
                (document.write(
                  '<embed id="deployJavaPlugin" type="' +
                    this.mimeType +
                    '" hidden="true" />'
                ),
                (e = true))
            }
            if (!e) {
              for (var i = 0; i < navigator.mimeTypes.length; i++) {
                navigator.mimeTypes[i].type == this.oldMimeType &&
                  navigator.mimeTypes[i].enabledPlugin &&
                  document.write(
                    '<embed id="deployJavaPlugin" type="' +
                      this.oldMimeType +
                      '" hidden="true" />'
                  )
              }
            }
          }
        },
      }
      if ((f.writePluginTag(), null == f.locale)) {
        var h = null
        if (null == h) {
          try {
            h = navigator.userLanguage
          } catch (m) {}
        }
        if (null == h) {
          try {
            h = navigator.systemLanguage
          } catch (m) {}
        }
        if (null == h) {
          try {
            h = navigator.language
          } catch (m) {}
        }
        null != h && (h.replace('-', '_'), (f.locale = h))
      }
    },
    function (e, t, i) {
      'use strict'
      var n = i(11)
    },
    function (e, t) {
      var i,
        n,
        r,
        a,
        o,
        s,
        h = window,
        m = document,
        g = navigator,
        b = false,
        v = [],
        w = [],
        y = [],
        x = [],
        C = false,
        S = false,
        k = true,
        T = false,
        M = (function () {
          var e =
              typeof m.getElementById !== 'undefined' &&
              typeof m.getElementsByTagName !== 'undefined' &&
              typeof m.createElement !== 'undefined',
            t = g.userAgent.toLowerCase(),
            i = g.platform.toLowerCase(),
            n = /win/.test(i || t),
            r = /mac/.test(i || t),
            a =
              !!/webkit/.test(t) &&
              parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, '$1')),
            o = 'Microsoft Internet Explorer' === g.appName,
            s = [0, 0, 0],
            p = null
          if (
            typeof g.plugins !== 'undefined' &&
            typeof g.plugins['Shockwave Flash'] === 'object'
          ) {
            ;(p = g.plugins['Shockwave Flash'].description) &&
              typeof g.mimeTypes !== 'undefined' &&
              g.mimeTypes['application/x-shockwave-flash'] &&
              g.mimeTypes['application/x-shockwave-flash'].enabledPlugin &&
              ((b = true),
              (o = false),
              (p = p.replace(/^.*\s+(\S+\s+\S+$)/, '$1')),
              (s[0] = _(p.replace(/^(.*)\..*$/, '$1'))),
              (s[1] = _(p.replace(/^.*\.(.*)\s.*$/, '$1'))),
              (s[2] = /[a-zA-Z]/.test(p)
                ? _(p.replace(/^.*[a-zA-Z]+(.*)$/, '$1'))
                : 0))
          } else {
            if (typeof h.ActiveXObject !== 'undefined') {
              try {
                var f = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                f &&
                  (p = f.GetVariable('$version')) &&
                  ((o = true),
                  (s = [
                    _((p = p.split(' ')[1].split(','))[0]),
                    _(p[1]),
                    _(p[2]),
                  ]))
              } catch (v) {}
            }
          }
          return {
            w3: e,
            pv: s,
            wk: a,
            ie: o,
            win: n,
            mac: r,
          }
        })()
      function A() {
        if (!C && document.getElementsByTagName('body')[0]) {
          try {
            var e,
              t = J('span')
            t.style.display = 'none'
            ;(e = m
              .getElementsByTagName('body')[0]
              .appendChild(t)).parentNode.removeChild(e)
            e = null
            t = null
          } catch (r) {
            return
          }
          C = true
          for (var i = v.length, n = 0; n < i; n++) {
            v[n]()
          }
        }
      }
      function E(e) {
        C ? e() : (v[v.length] = e)
      }
      function P() {
        var e = w.length
        if (e > 0) {
          for (var t = 0; t < e; t++) {
            var i = w[t].id,
              n = w[t].callbackFn,
              r = {
                success: false,
                id: i,
              }
            if (M.pv[0] > 0) {
              var a = D(i)
              if (a) {
                if (!G(w[t].swfVersion) || (M.wk && M.wk < 312)) {
                  if (w[t].expressInstall && I()) {
                    var o = {
                      data: w[t].expressInstall,
                      width: a.getAttribute('width') || '0',
                      height: a.getAttribute('height') || '0',
                    }
                    a.getAttribute('class') &&
                      (o.styleclass = a.getAttribute('class'))
                    a.getAttribute('align') &&
                      (o.align = a.getAttribute('align'))
                    for (
                      var s = {},
                        u = a.getElementsByTagName('param'),
                        c = u.length,
                        d = 0;
                      d < c;
                      d++
                    ) {
                      'movie' !== u[d].getAttribute('name').toLowerCase() &&
                        (s[u[d].getAttribute('name')] =
                          u[d].getAttribute('value'))
                    }
                    B(o, s, i, n)
                  } else {
                    j(a)
                    n && n(r)
                  }
                } else {
                  z(i, true)
                  n && ((r.success = true), (r.ref = N(i)), (r.id = i), n(r))
                }
              }
            } else {
              if ((z(i, true), n)) {
                var p = N(i)
                p &&
                  typeof p.SetVariable !== 'undefined' &&
                  ((r.success = true), (r.ref = p), (r.id = p.id))
                n(r)
              }
            }
          }
        }
      }
      function N(e) {
        var t = null,
          i = D(e)
        return (
          i &&
            'OBJECT' === i.nodeName.toUpperCase() &&
            (t =
              typeof i.SetVariable !== 'undefined'
                ? i
                : i.getElementsByTagName('object')[0] || i),
          t
        )
      }
      function I() {
        return !S && G('6.0.65') && (M.win || M.mac) && !(M.wk && M.wk < 312)
      }
      function B(e, t, o, s) {
        var u = D(o)
        if (
          ((o = V(o)),
          (S = true),
          (r = s || null),
          (a = {
            success: false,
            id: o,
          }),
          u)
        ) {
          'OBJECT' === u.nodeName.toUpperCase()
            ? ((i = L(u)), (n = null))
            : ((i = u), (n = o))
          ;(typeof e.width === 'undefined' ||
            (!/%$/.test(e.width) && _(e.width) < 310)) &&
            (e.width = '310')
          ;(typeof e.height === 'undefined' ||
            (!/%$/.test(e.height) && _(e.height) < 137)) &&
            (e.height = '137')
          var c = M.ie ? 'ActiveX' : 'PlugIn',
            d =
              'MMredirectURL=' +
              encodeURIComponent(h.location.toString().replace(/&/g, '%26')) +
              '&MMplayerType=' +
              c +
              '&MMdoctitle=' +
              encodeURIComponent(
                m.title.slice(0, 47) + ' - Flash Player Installation'
              )
          if (
            (typeof t.flashvars !== 'undefined'
              ? (t.flashvars += '&' + d)
              : (t.flashvars = d),
            M.ie && 4 != u.readyState)
          ) {
            var f = J('div')
            o += 'SWFObjectNew'
            f.setAttribute('id', o)
            u.parentNode.insertBefore(f, u)
            u.style.display = 'none'
            R(u)
          }
          U(e, t, o)
        }
      }
      function j(e) {
        if (M.ie && 4 != e.readyState) {
          e.style.display = 'none'
          var t = J('div')
          e.parentNode.insertBefore(t, e)
          t.parentNode.replaceChild(L(e), t)
          R(e)
        } else {
          e.parentNode.replaceChild(L(e), e)
        }
      }
      function L(e) {
        var t = J('div')
        if (M.win && M.ie) {
        } else {
          var i = e.getElementsByTagName('object')[0]
          if (i) {
            var n = i.childNodes
            if (n) {
              for (var r = n.length, a = 0; a < r; a++) {
                ;(1 == n[a].nodeType && 'PARAM' === n[a].nodeName) ||
                  8 == n[a].nodeType ||
                  t.appendChild(n[a].cloneNode(true))
              }
            }
          }
        }
        return t
      }
      function U(e, t, i) {
        var n,
          r,
          a,
          o,
          s = D(i)
        if (((i = V(i)), M.wk && M.wk < 312)) {
          return n
        }
        if (s) {
          var c,
            p,
            f,
            h = M.ie ? J('div') : J('object')
          for (f in (typeof e.id === 'undefined' && (e.id = i), t))
            Object.prototype.hasOwnProperty.call(t, f) &&
              'movie' !== f.toLowerCase() &&
              O(h, f, t[f])
          for (c in (M.ie &&
            ((r = e.data),
            (a = h.innerHTML),
            ((o = J('div')).innerHTML =
              "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" +
              r +
              "'>" +
              a +
              '</object>'),
            (h = o.firstChild)),
          e))
            Object.prototype.hasOwnProperty.call(e, c) &&
              ('styleclass' === (p = c.toLowerCase())
                ? h.setAttribute('class', e[c])
                : 'classid' !== p && 'data' !== p && h.setAttribute(c, e[c]))
          M.ie
            ? (y[y.length] = e.id)
            : (h.setAttribute('type', 'application/x-shockwave-flash'),
              h.setAttribute('data', e.data))
          s.parentNode.replaceChild(h, s)
          n = h
        }
        return n
      }
      function O(e, t, i) {
        var n = J('param')
        n.setAttribute('name', t)
        n.setAttribute('value', i)
        e.appendChild(n)
      }
      function R(e) {
        var t = D(e)
        t &&
          'OBJECT' === t.nodeName.toUpperCase() &&
          (M.ie
            ? ((t.style.display = 'none'),
              (function i() {
                if (4 == t.readyState) {
                  for (var e in t) 'function' == typeof t[e] && (t[e] = null)
                  t.parentNode.removeChild(t)
                } else {
                  setTimeout(i, 10)
                }
              })())
            : t.parentNode.removeChild(t))
      }
      function F(e) {
        return e && e.nodeType && 1 === e.nodeType
      }
      function V(e) {
        return F(e) ? e.id : e
      }
      function D(e) {
        if (F(e)) {
          return e
        }
        var t = null
        try {
          t = m.getElementById(e)
        } catch (i) {}
        return t
      }
      function J(e) {
        return m.createElement(e)
      }
      function _(e) {
        return parseInt(e, 10)
      }
      function G(e) {
        e += ''
        var t = M.pv,
          i = e.split('.')
        return (
          (i[0] = _(i[0])),
          (i[1] = _(i[1]) || 0),
          (i[2] = _(i[2]) || 0),
          t[0] > i[0] ||
            (t[0] == i[0] && t[1] > i[1]) ||
            (t[0] == i[0] && t[1] == i[1] && t[2] >= i[2])
        )
      }
      function W(e, t, i, n) {
        var r = m.getElementsByTagName('head')[0]
        if (r) {
          var a = 'string' == typeof i ? i : 'screen'
          if ((n && ((o = null), (s = null)), !o || s != a)) {
            var u = J('style')
            u.setAttribute('type', 'text/css')
            u.setAttribute('media', a)
            o = r.appendChild(u)
            M.ie &&
              typeof m.styleSheets !== 'undefined' &&
              m.styleSheets.length > 0 &&
              (o = m.styleSheets[m.styleSheets.length - 1])
            s = a
          }
          o &&
            (typeof o.addRule !== 'undefined'
              ? o.addRule(e, t)
              : typeof m.createTextNode !== 'undefined' &&
                o.appendChild(m.createTextNode(e + ' {' + t + '}')))
        }
      }
      function z(e, t) {
        if (k) {
          var i = t ? 'visible' : 'hidden',
            n = D(e)
          C && n
            ? (n.style.visibility = i)
            : 'string' == typeof e && W('#' + e, 'visibility:' + i)
        }
      }
      function q(e) {
        return null !== /[\\"<>.;]/.exec(e) &&
          typeof encodeURIComponent !== 'undefined'
          ? encodeURIComponent(e)
          : e
      }
      M.w3 &&
        (((typeof m.readyState !== 'undefined' &&
          ('complete' === m.readyState || 'interactive' === m.readyState)) ||
          (typeof m.readyState === 'undefined' &&
            (m.getElementsByTagName('body')[0] || m.body))) &&
          A(),
        C ||
          (typeof m.addEventListener !== 'undefined' &&
            m.addEventListener('DOMContentLoaded', A, false),
          M.ie &&
            (m.attachEvent('onreadystatechange', function X() {
              'complete' === m.readyState &&
                (m.detachEvent('onreadystatechange', X), A())
            }),
            h == top &&
              (function $() {
                if (!C) {
                  try {
                    m.documentElement.doScroll('left')
                  } catch (e) {
                    return void setTimeout($, 0)
                  }
                  A()
                }
              })()),
          M.wk &&
            (function K() {
              C ||
                (/loaded|complete/.test(m.readyState) ? A() : setTimeout(K, 0))
            })()))
      v[0] = function () {
        b
          ? (function () {
              var e = m.getElementsByTagName('body')[0],
                t = J('object')
              t.setAttribute('style', 'visibility: hidden;')
              t.setAttribute('type', 'application/x-shockwave-flash')
              var i = e.appendChild(t)
              if (i) {
                var n = 0
                !(function r() {
                  if (typeof i.GetVariable !== 'undefined') {
                    try {
                      var a = i.GetVariable('$version')
                      a &&
                        ((a = a.split(' ')[1].split(',')),
                        (M.pv = [_(a[0]), _(a[1]), _(a[2])]))
                    } catch (o) {
                      M.pv = [8, 0, 0]
                    }
                  } else {
                    if (n < 10) {
                      return n++, void setTimeout(r, 10)
                    }
                  }
                  e.removeChild(t)
                  i = null
                  P()
                })()
              } else {
                P()
              }
            })()
          : P()
      }
      M.ie &&
        window.attachEvent('onunload', function () {
          for (var e = x.length, t = 0; t < e; t++) {
            x[t][0].detachEvent(x[t][1], x[t][2])
          }
          for (var i = y.length, n = 0; n < i; n++) {
            R(y[n])
          }
          for (var r in M) M[r] = null
          for (var a in ((M = null), H)) H[a] = null
          H = null
        })
      var H = {
        registerObject: function (e, t, i, n) {
          if (M.w3 && e && t) {
            var r = {
              id: e,
              swfVersion: t,
              expressInstall: i,
              callbackFn: n,
            }
            w[w.length] = r
            z(e, false)
          } else {
            n &&
              n({
                success: false,
                id: e,
              })
          }
        },
        getObjectById: function (e) {
          if (M.w3) {
            return N(e)
          }
        },
        embedSWF: function (e, t, i, n, r, a, o, s, c, d) {
          var p = V(t),
            f = {
              success: false,
              id: p,
            }
          M.w3 && !(M.wk && M.wk < 312) && e && t && i && n && r
            ? (z(p, false),
              E(function () {
                i += ''
                n += ''
                var h = {
                  m: c[m],
                  data: e,
                  width: i,
                  height: n,
                }
                if (c && typeof c === 'object') {
                  for (var m in c);
                }
                var g = { b: s[b] }
                if (s && typeof s === 'object') {
                  for (var b in s);
                }
                if (o && typeof o === 'object') {
                  for (var v in o)
                    if (Object.prototype.hasOwnProperty.call(o, v)) {
                      var w = T ? encodeURIComponent(v) : v,
                        y = T ? encodeURIComponent(o[v]) : o[v]
                      typeof g.flashvars !== 'undefined'
                        ? (g.flashvars += '&' + w + '=' + y)
                        : (g.flashvars = w + '=' + y)
                    }
                }
                if (G(r)) {
                  var x = U(h, g, t)
                  h.id == p && z(p, true)
                  f.success = true
                  f.ref = x
                  f.id = x.id
                } else {
                  if (a && I()) {
                    return (h.data = a), void B(h, g, t, d)
                  }
                  z(p, true)
                }
                d && d(f)
              }))
            : d && d(f)
        },
        switchOffAutoHideShow: function () {
          k = false
        },
        enableUriEncoding: function (e) {
          T = typeof e === 'undefined' || e
        },
        ua: M,
        getFlashPlayerVersion: function () {
          return {
            major: M.pv[0],
            minor: M.pv[1],
            release: M.pv[2],
          }
        },
        hasFlashPlayerVersion: G,
        createSWF: function (e, t, i) {
          return M.w3 ? U(e, t, i) : undefined
        },
        showExpressInstall: function (e, t, i, n) {
          M.w3 && I() && B(e, t, i, n)
        },
        removeSWF: function (e) {
          M.w3 && R(e)
        },
        createCSS: function (e, t, i, n) {
          M.w3 && W(e, t, i, n)
        },
        addDomLoadEvent: E,
        addLoadEvent: function (e) {
          if (typeof h.addEventListener !== 'undefined') {
            h.addEventListener('load', e, false)
          } else {
            if (typeof m.addEventListener !== 'undefined') {
              m.addEventListener('load', e, false)
            } else {
              if (typeof h.attachEvent !== 'undefined') {
                !(function (e, t, i) {
                  e.attachEvent(t, i)
                  x[x.length] = [e, t, i]
                })(h, 'onload', e)
              } else {
                if ('function' == typeof h.onload) {
                  var t = h.onload
                  h.onload = function () {
                    t()
                    e()
                  }
                } else {
                  h.onload = e
                }
              }
            }
          }
        },
        getQueryParamValue: function (e) {
          var t = m.location.search || m.location.hash
          if (t) {
            if ((/\?/.test(t) && (t = t.split('?')[1]), !e)) {
              return q(t)
            }
            for (var i = t.split('&'), n = 0; n < i.length; n++) {
              if (i[n].substring(0, i[n].indexOf('=')) == e) {
                return q(i[n].substring(i[n].indexOf('=') + 1))
              }
            }
          }
          return ''
        },
        expressInstallCallback: function () {
          if (S) {
            var e = D('SWFObjectExprInst')
            e &&
              i &&
              (e.parentNode.replaceChild(i, e),
              n && (z(n, true), M.ie && (i.style.display = 'block')),
              r && r(a))
            S = false
          }
        },
        version: '2.3',
      }
    },
    function (e, t, i) {
      'use strict'
      var n = i(7),
        r = i(0).ClientJS,
        a = i(8),
        o = i(10)
      function s() {
        r.apply(this, arguments)
      }
      n(s, r)
      s.prototype.getJavaVersion = a
      s.prototype.getFlashVersion = o
    },
  ])
})
