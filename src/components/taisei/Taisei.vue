<script setup>
import CommonTitle from '@/components/CommonTitle.vue'
import SubTitle from '@/components/SubTitle.vue'
</script>

<script>
export default {
  data() {
    return {
      menuList: [
        //毒
        {
          title: '毒 / 毒',
          chTitle: '毒',
          jpTitle: '毒',
          link: '/#/taisei/#01'
          , id: '01',
          describe: '定時中毒傷害',
          weapon: [
            {
              imgPath: './img/weapon/las/3.webp',
              kyara: '火主 / ラス',
              kyaraImg: './img/char/las.webp',
              path: '/character/las',
              rank: '(SSR)',
              name: 'バアルザード',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/las/11.webp',
              kyara: '火主 / ラス',
              kyaraImg: './img/char/las.webp',
              path: '/character/las',
              rank: '(R)',
              name: 'ルートヴィヒ',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
            {
              imgPath: './img/weapon/yuna/138.webp',
              kyara: '風法 - ユナ',
              kyaraImg: './img/char/yuna.webp',
              path: '/character/yuna',
              rank: '(SR)',
              name: 'ジハ',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },

          ],
          artifact: null,

        },
        //擊退
        {
          title: '擊退 / ノックバック',
          chTitle: '擊退',
          jpTitle: 'ノックバック',
          link: '/#/taisei/#02'
          , id: '02',
          describe: '無法行動',
          weapon: [
            {
              imgPath: './img/weapon/seriad/18.webp',
              kyara: '水法 - セリアード',
              kyaraImg: './img/char/seriad.webp',
              path: '/character/seriad',
              rank: '(SSR)',
              name: 'ヒフォクス',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/seriad/26.webp',
              kyara: '水法 - セリアード',
              kyaraImg: './img/char/seriad.webp',
              path: '/character/seriad',
              rank: '(R)',
              name: 'チヨ',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
            {
              imgPath: './img/weapon/ruin/118.webp',
              kyara: '土槍 - ルイン',
              kyaraImg: './img/char/ruin.webp',
              path: '/character/ruin',
              rank: '(SR)',
              name: 'ハロル',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },

          ],
          artifact: [
            {
              imgPath: './img/af/2021y11m19d_1654487273.webp',
              rank: '(SSR)',
              name: 'シェティアの黎明',
              data: [
                {
                  content: '初始：80%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/af/2021y11m19d_1905189568.webp',
              rank: '(SR)',
              name: '難攻不落の要塞',
              data: [
                {
                  content: '初始：40%'
                },
                {
                  content: '一星突破：48%'
                },
                {
                  content: '二星突破：56%'
                },
                {
                  content: '三星突破：64%'
                },
                {
                  content: '四星突破：72%'
                },
                {
                  content: '五星突破：80%'
                }
              ]
            },
          ],
        },
        //擊倒
        {
          title: '擊倒 / ダウン',
          link: '/#/taisei/#03',
          chTitle: '擊倒',
          jpTitle: 'ダウン',
          id: '03',
          describe: '無法行動',
          weapon: [
            {
              imgPath: './img/weapon/quyi/44.webp',
              kyara: '火法 - キュイ',
              kyaraImg: './img/char/quyi.webp',
              path: '/character/quyi',
              rank: '(SSR)',
              name: 'セヘラザド',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/quyi/53.webp',
              kyara: '火法 - キュイ',
              kyaraImg: './img/char/quyi.webp',
              path: '/character/quyi',
              rank: '(R)',
              name: 'マヤ',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
            {
              imgPath: './img/weapon/jun/98.webp',
              kyara: '暗法 - ジュン',
              kyaraImg: './img/char/jun.webp',
              path: '/character/jun',
              rank: '(SR)',
              name: 'ネオテラ',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/jun/103.webp',
              kyara: '暗法 - ジュン',
              kyaraImg: './img/char/jun.webp',
              path: '/character/jun',
              rank: '(R)',
              name: 'シニー',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },

          ],
          artifact: [
            {
              imgPath: './img/af/2021y11m19d_1654431521.webp',
              rank: '(SSR)',
              name: '夢幻の案内者',
              data: [
                {
                  content: '初始：80%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/af/2021y11m19d_1904362326.webp',
              rank: '(SR)',
              name: '黄金の永眠',
              data: [
                {
                  content: '初始：40%'
                },
                {
                  content: '一星突破：48%'
                },
                {
                  content: '二星突破：56%'
                },
                {
                  content: '三星突破：64%'
                },
                {
                  content: '四星突破：72%'
                },
                {
                  content: '五星突破：80%'
                }
              ]
            },
          ],
        },
        //火傷
        {
          title: '火傷 / 火傷',
          link: '/#/taisei/#04',
          chTitle: '火傷',
          jpTitle: '火傷',
          id: '04',
          describe: '定時燃燒傷害',
          weapon: [
            {
              imgPath: './img/weapon/win/31.webp',
              kyara: '土坦 - ウィン',
              kyaraImg: './img/char/win.webp',
              path: '/character/win',
              rank: '(SSR)',
              name: 'ヴェサ',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/win/40.webp',
              kyara: '土坦 - ウィン',
              kyaraImg: './img/char/win.webp',
              path: '/character/win',
              rank: '(R)',
              name: 'ゴリヤード',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
            {
              imgPath: './img/weapon/kaito/110.webp',
              kyara: '水刀 - カイト',
              kyaraImg: './img/char/kaito.webp',
              path: '/character/kaito',
              rank: '(SR)',
              name: 'シン',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },

          ],
          artifact: null,

        },
        //石化
        {
          title: '石化 / 石化',
          link: '/#/taisei/#05',
          chTitle: '石化',
          jpTitle: '石化',
          id: '05',
          describe: '無法行動',
          weapon: [
            {
              imgPath: './img/weapon/namalie/72.webp',
              kyara: '風槍 - ナマリエ',
              kyaraImg: './img/char/namalie.webp',
              path: '/character/namalie',
              rank: '(SSR)',
              name: 'シルフィード',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/namalie/80.webp',
              kyara: '風槍 - ナマリエ',
              kyaraImg: './img/char/namalie.webp',
              path: '/character/namalie',
              rank: '(R)',
              name: 'カイラ',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
          ],
          artifact: null,
        },
        //擊飛
        {
          title: '擊飛 / エアー',
          link: '/#/taisei/#06',
          chTitle: '擊飛',
          jpTitle: 'エアー',
          id: '06',
          describe: '無法行動',
          weapon: [
            {
              imgPath: './img/weapon/karte/57.webp',
              kyara: '暗刺 - カルト',
              kyaraImg: './img/char/karte.webp',
              path: '/character/karte',
              rank: '(SSR)',
              name: 'バラク',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/karte/64.webp',
              kyara: '暗刺 - カルト',
              kyaraImg: './img/char/karte.webp',
              path: '/character/karte',
              rank: '(R)',
              name: 'ダルヴァ',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
          ],
          artifact: [
            {
              imgPath: './img/af/2021y11m19d_1654454004.webp',
              rank: '(SSR)',
              name: '落ちぶれる神聖',
              data: [
                {
                  content: '初始：80%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/af/2021y11m19d_1905158304.webp',
              rank: '(SR)',
              name: '龍の丘へ',
              data: [
                {
                  content: '初始：40%'
                },
                {
                  content: '一星突破：48%'
                },
                {
                  content: '二星突破：56%'
                },
                {
                  content: '三星突破：64%'
                },
                {
                  content: '四星突破：72%'
                },
                {
                  content: '五星突破：80%'
                }
              ]
            },
          ],
        },
        //出血
        {
          title: '出血 / 出血',
          link: '/#/taisei/#07',
          chTitle: '出血',
          jpTitle: '出血',
          id: '07',
          describe: '定時出血傷害',
          weapon: [
            {
              imgPath: './img/weapon/las/8.webp',
              kyara: '火主 - ラス',
              kyaraImg: './img/char/las.webp',
              path: '/character/las',
              rank: '(SR)',
              name: 'フローラ',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/las/12.webp',
              kyara: '火主 - ラス',
              kyaraImg: './img/char/las.webp',
              path: '/character/las',
              rank: '(R)',
              name: 'リナ',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
          ],
          artifact: null,
        },
        //暈眩
        {
          title: '暈眩 / スタン',
          link: '/#/taisei/#08',
          chTitle: '暈眩',
          jpTitle: 'スタン',
          id: '08',
          describe: '無法行動',
          weapon: [
            {
              imgPath: './img/weapon/seriad/20.webp',
              kyara: '水法 - セリアード',
              kyaraImg: './img/char/seriad.webp',
              path: '/character/seriad',
              rank: '(SR)',
              name: 'ペイシー',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/seriad/25.webp',
              kyara: '水法 - セリアード',
              kyaraImg: './img/char/seriad.webp',
              path: '/character/seriad',
              rank: '(R)',
              name: 'ベネディクト',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
          ],
          artifact: [
            {
              imgPath: './img/af/2021y11m19d_1654529924.webp',
              rank: '(SSR)',
              name: 'もう一つの物語',
              data: [
                {
                  content: '初始：80%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/af/2021y11m19d_1904590918.webp',
              rank: '(SR)',
              name: '正当な判決',
              data: [
                {
                  content: '初始：40%'
                },
                {
                  content: '一星突破：48%'
                },
                {
                  content: '二星突破：56%'
                },
                {
                  content: '三星突破：64%'
                },
                {
                  content: '四星突破：72%'
                },
                {
                  content: '五星突破：80%'
                }
              ]
            },
          ],
        },
        //緩速
        {
          title: '緩速 / スロー',
          link: '/#/taisei/#09',
          chTitle: '緩速',
          jpTitle: 'スロー',
          id: '09',
          describe: '降低移動速度',
          describe2: '降低敏捷',
          weapon: [
            {
              imgPath: './img/weapon/win/35.webp',
              kyara: '土坦 - ウィン',
              kyaraImg: './img/char/win.webp',
              path: '/character/win',
              rank: '(SR)',
              name: 'ネリー',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/win/39.webp',
              kyara: '土坦 - ウィン',
              kyaraImg: './img/char/win.webp',
              path: '/character/win',
              rank: '(R)',
              name: 'タシオン',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
          ],
          artifact: [
            {
              imgPath: './img/af/2021y11m19d_1654394622.webp',
              rank: '(SSR)',
              name: '反撃の旗',
              data: [
                {
                  content: '初始：80%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/af/2021y11m19d_1904215355.webp',
              rank: '(SR)',
              name: 'あの日の決意',
              data: [
                {
                  content: '初始：40%'
                },
                {
                  content: '一星突破：48%'
                },
                {
                  content: '二星突破：56%'
                },
                {
                  content: '三星突破：64%'
                },
                {
                  content: '四星突破：72%'
                },
                {
                  content: '五星突破：80%'
                }
              ]
            },
          ],
        },
        //束縛
        {
          title: '束縛 / 束縛',
          link: '/#/taisei/#10',
          chTitle: '束縛',
          jpTitle: '束縛',
          id: '10',
          describe: '無法行動',
          weapon: [
            {
              imgPath: './img/weapon/jun/94.webp',
              kyara: '暗法 - ジュン',
              kyaraImg: './img/char/jun.webp',
              path: '/character/jun',
              rank: '(SSR)',
              name: 'バドル',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/jun/102.webp',
              kyara: '暗法 - ジュン',
              kyaraImg: './img/char/jun.webp',
              path: '/character/jun',
              rank: '(R)',
              name: 'ロロス',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
            {
              imgPath: './img/weapon/quyi/48.webp',
              kyara: '火法 - キュイ',
              kyaraImg: './img/char/quyi.webp',
              path: '/character/quyi',
              rank: '(SR)',
              name: 'エイリー',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/quyi/52.webp',
              kyara: '火法 - キュイ',
              kyaraImg: './img/char/quyi.webp',
              path: '/character/quyi',
              rank: '(R)',
              name: 'コベット',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },

          ],
          artifact: [
            {
              imgPath: './img/af/2021y11m19d_165457844.webp',
              rank: '(SSR)',
              name: '鎖を断つ者',
              data: [
                {
                  content: '初始：80%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/af/2021y11m19d_1905261879.webp',
              rank: '(SR)',
              name: '崩れた天空階段',
              data: [
                {
                  content: '初始：40%'
                },
                {
                  content: '一星突破：48%'
                },
                {
                  content: '二星突破：56%'
                },
                {
                  content: '三星突破：64%'
                },
                {
                  content: '四星突破：72%'
                },
                {
                  content: '五星突破：80%'
                }
              ]
            },
          ],
        },
        //凍結
        {
          title: '凍結 / 凍結',
          link: '/#/taisei/#11',
          chTitle: '凍結',
          jpTitle: '凍結',
          id: '11',
          describe: '無法行動',
          weapon: [
            {
              imgPath: './img/weapon/yuna/135.webp',
              kyara: '風法 - ユナ',
              kyaraImg: './img/char/yuna.webp',
              path: '/character/yuna',
              rank: '(SSR)',
              name: 'ホンギルドン',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/karte/61.webp',
              kyara: '暗刺 - カルト',
              kyaraImg: './img/char/karte.webp',
              path: '/character/karte',
              rank: '(SR)',
              name: 'セティラ',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/karte/66.webp',
              kyara: '暗刺 - カルト',
              kyaraImg: './img/char/karte.webp',
              path: '/character/karte',
              rank: '(R)',
              name: 'ファティマ',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
          ],
          artifact: null,
        },
        //感電
        {
          title: '感電 / 感電',
          link: '/#/taisei/#12',
          chTitle: '感電',
          jpTitle: '感電',
          id: '12',
          describe: '定時電擊傷害',
          weapon: [
            {
              imgPath: './img/weapon/namalie/76.webp',
              kyara: '風槍 - ナマリエ',
              kyaraImg: './img/char/namalie.webp',
              path: '/character/namalie',
              rank: '(SR)',
              name: 'ブレシラ',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/namalie/77.webp',
              kyara: '風槍 - ナマリエ',
              kyaraImg: './img/char/namalie.webp',
              path: '/character/namalie',
              rank: '(R)',
              name: 'プリイ',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
            {
              imgPath: './img/weapon/oruta/2021y11m30d_1226393584.webp',
              kyara: '光法 - オルタ',
              kyaraImg: './img/char/oruta.webp',
              path: '/character/oruta',
              rank: '(SR)',
              name: 'ナツネ',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/oruta/2021y11m30d_122637861.webp',
              kyara: '光法 - オルタ',
              kyaraImg: './img/char/oruta.webp',
              path: '/character/oruta',
              rank: '(R)',
              name: 'アイナ',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
          ],
          artifact: null,
        },
        //水縛
        {
          title: '水縛 / 水縛',
          link: '/#/taisei/#13',
          chTitle: '水縛',
          jpTitle: '水縛',
          id: '13',
          describe: '無法行動',
          weapon: [
            {
              imgPath: './img/weapon/ruin/117.webp',
              kyara: '土槍 - ルイン',
              kyaraImg: './img/char/ruin.webp',
              path: '/character/ruin',
              rank: '(SSR)',
              name: 'オフィリア',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
          ],
          artifact: [
            {
              imgPath: './img/af/2021y11m19d_1654371101.webp',
              rank: '(SSR)',
              name: '川の歌',
              data: [
                {
                  content: '初始：80%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/af/2021y11m19d_1702237278.webp',
              rank: '(SR)',
              name: '嵐の中の帰還',
              data: [
                {
                  content: '初始：40%'
                },
                {
                  content: '一星突破：48%'
                },
                {
                  content: '二星突破：56%'
                },
                {
                  content: '三星突破：64%'
                },
                {
                  content: '四星突破：72%'
                },
                {
                  content: '五星突破：80%'
                }
              ]
            },
          ],
        },
        {
          title: '沉默 / 沈黙',
          link: '/#/taisei/#14',
          chTitle: '沉默',
          jpTitle: '沈黙',
          id: '14',
          describe: '無法使用技能',
          describe2: '無法切換角色',
          weapon: [
            {
              imgPath: './img/weapon/kaito/107.webp',
              kyara: '水刀 - カイト',
              kyaraImg: './img/char/kaito.webp',
              path: '/character/kaito',
              rank: '(SSR)',
              name: 'ケイ',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/reon/154.webp',
              kyara: '光坦 - レオン',
              kyaraImg: './img/char/reon.webp',
              path: '/character/reon',
              rank: '(SR)',
              name: 'ルドラ',
              data: [
                {
                  content: '初始：60%'
                },
                {
                  content: '一星突破：80%'
                },
                {
                  content: '二星突破：90%'
                },
                {
                  content: '三星突破：100%'
                },
              ]
            },
          ],
          artifact: [
            {
              imgPath: './img/af/2021y11m19d_1654537251.webp',
              rank: '(SSR)',
              name: '隠された顔',
              data: [
                {
                  content: '初始：80%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/af/2021y11m19d_1702229888.webp',
              rank: '(SR)',
              name: '亡霊のヘルム',
              data: [
                {
                  content: '初始：40%'
                },
                {
                  content: '一星突破：48%'
                },
                {
                  content: '二星突破：56%'
                },
                {
                  content: '三星突破：64%'
                },
                {
                  content: '四星突破：72%'
                },
                {
                  content: '五星突破：80%'
                }
              ]
            },
          ],
        },
        {
          title: '浸濕 / ウェット',
          link: '/#/taisei/#15',
          chTitle: '浸濕',
          jpTitle: 'ウェット',
          id: '15',
          describe: '傷害降低',
          weapon: [
            {
              imgPath: './img/weapon/oruta/2021y11m30d_1226320038.webp',
              kyara: '光法 - オルタ',
              kyaraImg: './img/char/oruta.webp',
              path: '/character/oruta',
              rank: '(SSR)',
              name: 'マユキ',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
            {
              imgPath: './img/weapon/oruta/2021y11m30d_1226371114.webp',
              kyara: '光法 - オルタ',
              kyaraImg: './img/char/oruta.webp',
              path: '/character/oruta',
              rank: '(R)',
              name: 'ソウリン',
              data: [
                {
                  content: '初始：30%'
                },
                {
                  content: '一星突破：50%'
                },
                {
                  content: '三星突破：70%'
                },
                {
                  content: '五星突破：90%'
                },
              ]
            },
          ],
          artifact: null,
        },
        {
          title: '變身 / 変異',
          link: '/#/taisei/#16',
          chTitle: '變身',
          jpTitle: '変異',
          id: '16',
          describe: '變身',
          describe2: '無法行動',
          weapon: [
            {
              imgPath: './img/weapon/reon/152.webp',
              kyara: '光坦 - レオン',
              kyaraImg: './img/char/reon.webp',
              path: '/character/reon',
              rank: '(SSR)',
              name: 'アイギス',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
          ],
          artifact: null,
        },
        {
          title: '麻痺 / 麻痺',
          link: '/#/taisei/#17',
          chTitle: '麻痺',
          jpTitle: '麻痺',
          id: '17',
          describe: '無法行動',
          weapon: [
            {
              imgPath: './img/weapon/win/161.webp',
              kyara: '土坦 - ウィン',
              kyaraImg: './img/char/win.webp',
              path: '/character/win',
              rank: '(SSR)',
              name: 'ヘソン',
              data: [
                {
                  content: '初始：90%'
                },
                {
                  content: '一星突破：100%'
                },
              ]
            },
          ],
          artifact: null,
          cantWork: false,
        },
      ],

      lightBoxAct: false,
      choosenTaisei: {},
    }
  },

  head: {
    title: '耐性一覽 - 格蘭日服攻略站'
  },

  methods: {
    lightboxAct(e) {
      if (e) {
        this.lightBoxAct = true;
        this.menuList.forEach(item => {
          if (item.id == e) {
            return this.choosenTaisei = item
          }
        })
      }
    },
    closeLightBox(event) {
      if (event.target == this.$refs.lightbox) {
        this.lightBoxAct = false;
        this.choosenTaisei = {}
      }
    },
  },

  created() {

  },

  mounted() {
    document.title = '耐性對策 - 格蘭日服攻略站'
  },



}



</script>

<template>
  <section id="taisei">
    <CommonTitle title="耐性對策詳細資訊" />

    <div class="anchorArea">
      <ul>
        <li v-for="item in menuList" @click="lightboxAct(item.id)">
          {{ item.title }}
        </li>
      </ul>
    </div>

    <CommonTitle title="耐性對策一覽表" />

    <div class="taiseiContent" id="taiseiTable">
      <table border="1">
        <thead>
          <tr>
            <th>異常狀態</th>
            <th>說明</th>
            <th>格蘭武器</th>
            <th>神器</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in menuList">
            <td>
              <div class="title">{{ item.chTitle }}</div>
              <div>{{ item.jpTitle }}</div>
            </td>
            <td>
              <div>{{ item.describe }}</div>
              <div>{{ item.describe2 }}</div>
            </td>
            <td>
              <div class="card" v-for="weapon in item.weapon" v-if="item.weapon">
                <img :src="weapon.imgPath" alt="">
              </div>
              <div class="nullCard" v-else>
                <span>無</span>
              </div>
            </td>
            <td class="afArea">
              <div class="card" v-for="af in item.artifact" v-if="item.artifact">
                <img :src="af.imgPath" alt="">
              </div>
              <div class="nullCard" v-else>
                <span>無</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </section>

  <section class="lightBox" v-show="lightBoxAct" @click="closeLightBox($event)" ref="lightbox">
    <div class="container">
      <SubTitle :title="choosenTaisei.title" />
      <table class="weaponTaisei" border="1" v-if="choosenTaisei.weapon">
        <thead>
          <tr>
            <th>格蘭武器</th>
            <th>角色</th>
            <th>耐性值</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="card in choosenTaisei.weapon">
            <td class="weaponName">
              <div class="card weaponCard">
                <img :src="card.imgPath" alt="">
                <div class="nameArea">
                  <div>{{ card.name }}</div>
                  <div>{{ card.rank }}</div>
                </div>
              </div>
            </td>
            <td class="kyaraName">
              <div class="card ">
                <router-link :to="card.path" target="_blank">
                  <img :src="card.kyaraImg" alt="">
                  <div>{{ card.kyara }}</div>
                </router-link>
              </div>
            </td>
            <td>
              <div v-for="data in card.data">{{ data.content }}</div>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="afTaisei" border="1" v-if="choosenTaisei.artifact">
        <thead>
          <tr>
            <th>神器</th>
            <th>耐性值</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="card in choosenTaisei.artifact">
            <td>
              <div class="card afCard">
                <img :src="card.imgPath" alt="">
                <div class="nameArea">
                  <div>{{ card.name }}</div>
                  <div>{{ card.rank }}</div>
                </div>
              </div>
            </td>
            <td class="taiseiCard">
              <div v-for="data in card.data">{{ data.content }}</div>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="choosenTaisei.cantWork" class="cantWork">
        目前尚無對策
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../sass/mixin';
@import '../../sass/reset';
@import '../../sass/variable';

#taisei {
  width: 100%;

  .anchorArea {
    width: 100%;

    ul {
      width: 100%;
      list-style: none;
      @include flex(flex-start, flex-start);
      flex-wrap: wrap;
      margin: 10px 0;

      li {
        width: calc(100% / 3);
        @include flex;
        padding: 10px 0;
        color: $lightfontcolor;
        cursor: pointer;

        &:hover {
          color: $darkfontcolor;
          font-weight: 700;
        }
      }

    }
  }

  .taiseiContent {
    width: 100%;

    table {
      width: 100%;
      margin-top: 10px;
      border: 1px solid $darkfontcolor;

      thead {
        tr {
          th {
            padding: 10px;
            background-color: $lightfontcolor;
            color: white;
          }
        }
      }

      tbody {
        tr {
          &:nth-child(2n) {
            background-color: #f5f5f5;
          }

          td {
            color: $lightfontcolor;
            padding: 10px;
            text-align: center;

            .card {
              float: left;
              margin-right: 5px;

              &:last-of-type {
                margin-right: 0;
              }

              img {
                width: 70px;
              }
            }


          }

          .title {
            color: $darkfontcolor;
          }

        }
      }
    }
  }

}

.lightBox {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  @include flex;

  .container {
    padding: 20px;
    width: 775px;
    background-color: $lightboxbg;
    max-height: calc(100vh - 40px);
    overflow: auto;

    &::-webkit-scrollbar {
      background-color: #c2c2c2;
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $maincolor;
    }

    table {
      width: 100%;
      margin-top: 20px;
      border: 1px solid $darkfontcolor;

      thead {
        tr {
          th {
            padding: 10px;
            background-color: $lightfontcolor;
            color: white;
          }
        }
      }

      tbody {
        tr {
          &:nth-child(2n) {
            background-color: #f5f5f5;
          }

          td {
            color: $darkfontcolor;
            padding: 10px;
            text-align: center;

            .card {
              margin-right: 5px;

              &:last-of-type {
                margin-right: 0;
              }

              img {
                width: 70px;
              }

              a {
                color: $darkfontcolor
              }
            }


          }

          .weaponCard,
          .afCard {
            @include flex;

            img {
              margin-right: 20px;
            }

            .nameArea {
              width: 45%;
            }
          }


        }
      }
    }

    .weaponTaisei {
      .weaponName {
        width: 30%;
      }

      .kyaraName {
        width: 20%;

        img {
          width: 50px;
        }
      }

      td {
        &:last-child {
          width: 50%;
        }
      }
    }

    .afTaisei {
      td {
        width: 50%;
      }
    }

    .cantWork {
      color: $darkfontcolor;
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      font-size: $h3;
      font-weight: 700;
      @include flex;
    }


  }

}
</style>
