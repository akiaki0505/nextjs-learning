import React from "react";

export function Test() {
  return (
    <>
      <style jsx>{`
        @charset "UTF-8";
        /* CSS Document */

        /* CSSリセット */
        .clearfix:after {
          content: ".";
          display: block;
          clear: both;
          height: 0;
          visibility: hidden;
        }

        /******* 地図成形 *******/
        #japan-map div div.area div {
          border: 1px #ffffff solid;
          text-align: center;
          font-size: 14px;
          display: flex;
          display: -webkit-flex;
          align-items: center; /* 縦方向中央揃え */
          -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
          justify-content: center; /* 横方向中央揃え */
          -webkit-justify-content: center; /* 横方向中央揃え（Safari用） */
          border-radius: 6px;
          -webkit-border-radius: 6px;
          position: absolute;
          box-sizing: border-box;
          transition: 0.2s;
        }
        #japan-map div div.area div:hover {
          opacity: 0.5;
          transition: 0.2s;
        }

        #japan-map {
          display: block;
          width: 777px;
          height: 482px;
          background-color: none;
          margin-left: auto;
          margin-right: auto;
          position: relative;
        }
        #japan-map p.area-title {
          display: none;
        }

        /* 北海道・東北 */

        #hokkaido-touhoku {
          width: 136px;
          display: block;
          height: 265px;
          position: absolute;
          left: 638px;
        }
        #hokkaido-touhoku div.area div {
          background-color: #7478c2;
          color: #ffffff;
        }

        #hokkaido {
          width: 133px;
          height: 70px;
        }
        #aomori {
          width: 93px;
          height: 43px;
          left: 21px;
          top: 96px;
        }
        #akita {
          width: 67px;
          height: 42px;
          left: 3px;
          top: 139px;
        }
        #iwate {
          width: 67px;
          height: 42px;
          left: 70px;
          top: 139px;
        }
        #yamagata {
          width: 67px;
          height: 42px;
          top: 181px;
          left: 3px;
        }
        #miyagi {
          width: 67px;
          height: 42px;
          top: 181px;
          left: 70px;
        }
        #fukushima {
          width: 67px;
          height: 42px;
          top: 223px;
          left: 70px;
        }

        /* 関東 */

        #kantou {
          width: 158px;
          display: block;
          height: 174px;
          position: absolute;
          top: 265px;
          left: 623px;
          z-index: 2;
        }
        #kantou div.area div {
          background-color: #31beca;
          color: #ffffff;
        }
        #ibaraki {
          width: 52px;
          height: 85px;
          top: 0px;
          left: 100px;
        }
        #tochigi {
          width: 50px;
          height: 42px;
          top: 0px;
          left: 50px;
        }
        #gunma {
          width: 50px;
          height: 42px;
          top: 0px;
          left: 0px;
        }
        #saitama {
          width: 100px;
          height: 43px;
          top: 42px;
          left: 0px;
        }
        #chiba {
          width: 52px;
          height: 84px;
          top: 85px;
          left: 100px;
        }
        #tokyo {
          width: 100px;
          height: 42px;
          top: 85px;
          left: 0px;
        }
        #kanagawa {
          width: 67px;
          height: 42px;
          top: 127px;
          left: 0px;
        }

        /* 中部 */

        #tyubu {
          width: 270px;
          height: 211px;
          position: absolute;
          left: 438px;
          top: 223px;
        }
        #tyubu div.area div {
          background-color: #4ab969;
          color: #ffffff;
        }

        #nigata {
          width: 85px;
          height: 42px;
          left: 185px;
        }
        #toyama {
          width: 67px;
          height: 42px;
          left: 118px;
        }
        #ishikawa {
          width: 50px;
          height: 57px;
          left: 68px;
        }
        #fukui {
          width: 68px;
          height: 42px;
          left: 0px;
          z-index: 2;
        }
        #nagano {
          width: 67px;
          height: 85px;
          left: 118px;
          top: 42px;
        }
        #yamanashi {
          width: 67px;
          height: 42px;
          left: 118px;
          top: 127px;
        }
        #gifu {
          width: 50px;
          height: 55px;
          left: 68px;
          top: 57px;
        }
        #shizuoka {
          width: 67px;
          height: 42px;
          left: 118px;
          top: 169px;
        }
        #aichi {
          width: 50px;
          height: 57px;
          top: 112px;
          left: 68px;
        }

        /* 近畿 */

        #kinki {
          width: 186px;
          height: 211px;
          position: absolute;
          left: 320px;
          top: 223px;
        }
        #kinki div.area div {
          background-color: #b0b72f;
          color: #ffffff;
        }

        #kyoto {
          width: 67px;
          height: 84px;
          left: 51px;
        }
        #shiga {
          width: 68px;
          height: 42px;
          top: 42px;
          left: 118px;
        }
        #osaka {
          width: 67px;
          height: 85px;
          top: 84px;
          left: 51px;
        }
        #nara {
          width: 34px;
          height: 85px;
          top: 84px;
          left: 118px;
        }
        #mie {
          width: 34px;
          height: 85px;
          top: 84px;
          left: 152px;
        }
        #wakayama {
          width: 113px;
          height: 42px;
          top: 169px;
          left: 61px;
        }
        #hyougo {
          width: 51px;
          height: 98px;
          left: 0px;
        }

        /* 中国 */

        #tyugoku {
          width: 151px;
          height: 98px;
          position: absolute;
          left: 169px;
          top: 223px;
        }
        #tyugoku div.area div {
          background-color: #ef9f27;
          color: #ffffff;
        }
        #tottori {
          width: 50px;
          height: 49px;
          left: 101px;
        }
        #okayama {
          width: 50px;
          height: 49px;
          top: 49px;
          left: 101px;
        }
        #shimane {
          width: 51px;
          height: 49px;
          left: 50px;
        }
        #hiroshima {
          width: 51px;
          height: 49px;
          top: 49px;
          left: 50px;
        }
        #yamaguchi {
          width: 50px;
          height: 98px;
          left: 0px;
        }

        /* 四国 */

        #shikoku {
          width: 184px;
          height: 84px;
          position: absolute;
          left: 169px;
          top: 350px;
        }
        #shikoku div.area div {
          background-color: #d08f68;
          color: #ffffff;
        }
        #kagawa {
          width: 92px;
          height: 42px;
          right: 0px;
        }
        #ehime {
          width: 92px;
          height: 42px;
          left: 0px;
        }
        #tokushima {
          width: 92px;
          height: 42px;
          right: 0px;
          top: 42px;
        }
        #kouchi {
          width: 92px;
          height: 42px;
          left: 0px;
          top: 42px;
        }

        /* 九州・沖縄 */

        #kyusyu {
          width: 152px;
          height: 247px;
          position: absolute;
          left: 0px;
          top: 235px;
        }
        #kyusyu div.area div {
          background-color: #ff7575;
          color: #ffffff;
        }
        #fukuoka {
          width: 50px;
          height: 50px;
          left: 101px;
          top: 0px;
        }
        #saga {
          width: 50px;
          height: 50px;
          left: 51px;
          top: 0px;
        }
        #nagasaki {
          width: 50px;
          height: 50px;
          left: 1px;
          top: 0px;
        }
        #oita {
          width: 50px;
          height: 50px;
          left: 101px;
          top: 50px;
        }
        #kumamoto {
          width: 50px;
          height: 100px;
          left: 51px;
          top: 50px;
        }
        #miyazaki {
          width: 50px;
          height: 50px;
          left: 101px;
          top: 100px;
        }
        #kagoshima {
          width: 68px;
          height: 49px;
          left: 83px;
          top: 150px;
        }
        #okinawa {
          width: 50px;
          height: 50px;
          left: 1px;
          top: 197px;
        }

        /****************************************
         レスポンシブ
         *****************************************/
        @media screen and (max-width: 776px) {
          #japan-map {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          #japan-map p.area-title {
            display: inline-block;
            width: 100%;
            font-size: 15px;
            text-align: center;
            margin-top: 1.5em;
            margin-bottom: 1em;
            color: #000000;
          }
          #hokkaido-touhoku,
          #kantou,
          #tyubu,
          #kinki,
          #tyugoku,
          #shikoku,
          #kyusyu {
            display: block;
            position: static;
            margin: 0 1em 0 1em;
          }
          #japan-map div div.area {
            display: block;
            position: relative;
          }

          #hokkaido-touhoku {
            height: calc(265px + 4.5em);
          }
          #kantou {
            height: calc(174px + 4.5em);
          }
          #tyubu {
            height: calc(211px + 4.5em);
          }
          #kinki {
            height: calc(211px + 4.5em);
          }
          #tyugoku {
            height: calc(98px + 4.5em);
          }
          #shikoku {
            height: calc(84px + 4.5em);
          }
          #kyusyu {
            height: calc(247px + 4.5em);
          }
        } /* レスポンシブ max-776px */

        @media screen and (max-width: 500px) {
          #japan-map {
            display: block;
            width: 100%;
            height: auto;
          }
          #hokkaido-touhoku,
          #kantou,
          #tyubu,
          #kinki,
          #tyugoku,
          #shikoku,
          #kyusyu {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: auto;
            position: static;
            margin-left: 0px;
            margin-right: 0px;
          }
          #japan-map div div.area {
            font-size: 14px;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
          }
          #japan-map div div.area a {
            height: auto;
            width: 25%;
          }
          #japan-map div div.area div {
            display: block;
            border-radius: 0px;
            position: static;
            height: auto;
            font-size: 16px;
            width: 100%;
            padding: 0.5em 0.3em 0.5em 0.3em;
          }
        } /* レスポンシブ max-500px */
      `}</style>
      <div id="japan-map" className="clearfix">
        <div id="hokkaido-touhoku" className="clearfix">
          <p className="area-title">北海道・東北</p>
          <div className="area">
            <a href="#">
              <div id="hokkaido">
                <p>北海道</p>
              </div>
            </a>
            <a href="#">
              <div id="aomori">
                <p>青森</p>
              </div>
            </a>
            <a href="#">
              <div id="akita">
                <p>秋田</p>
              </div>
            </a>
            <a href="#">
              <div id="iwate">
                <p>岩手</p>
              </div>
            </a>
            <a href="#">
              <div id="yamagata">
                <p>山形</p>
              </div>
            </a>
            <a href="#">
              <div id="miyagi">
                <p>宮城</p>
              </div>
            </a>
            <a href="#">
              <div id="fukushima">
                <p>福島</p>
              </div>
            </a>
          </div>
        </div>

        <div id="kantou">
          <p className="area-title">関東</p>
          <div className="area">
            <a href="#">
              <div id="gunma">
                <p>群馬</p>
              </div>
            </a>
            <a href="#">
              <div id="tochigi">
                <p>栃木</p>
              </div>
            </a>
            <a href="#">
              <div id="ibaraki">
                <p>茨城</p>
              </div>
            </a>
            <a href="#">
              <div id="saitama">
                <p>埼玉</p>
              </div>
            </a>
            <a href="#">
              <div id="chiba">
                <p>千葉</p>
              </div>
            </a>
            <a href="#">
              <div id="tokyo">
                <p>東京</p>
              </div>
            </a>
            <a href="#">
              <div id="kanagawa">
                <p>神奈川</p>
              </div>
            </a>
          </div>
        </div>

        <div id="tyubu" className="clearfix">
          <p className="area-title">中部</p>
          <div className="area">
            <a href="#">
              <div id="nigata">
                <p>新潟</p>
              </div>
            </a>
            <a href="#">
              <div id="toyama">
                <p>富山</p>
              </div>
            </a>
            <a href="#">
              <div id="ishikawa">
                <p>石川</p>
              </div>
            </a>
            <a href="#">
              <div id="fukui">
                <p>福井</p>
              </div>
            </a>
            <a href="#">
              <div id="nagano">
                <p>長野</p>
              </div>
            </a>
            <a href="#">
              <div id="gifu">
                <p>岐阜</p>
              </div>
            </a>
            <a href="#">
              <div id="yamanashi">
                <p>山梨</p>
              </div>
            </a>
            <a href="#">
              <div id="aichi">
                <p>愛知</p>
              </div>
            </a>
            <a href="#">
              <div id="shizuoka">
                <p>静岡</p>
              </div>
            </a>
          </div>
        </div>

        <div id="kinki" className="clearfix">
          <p className="area-title">近畿</p>
          <div className="area">
            <a href="#">
              <div id="kyoto">
                <p>京都</p>
              </div>
            </a>
            <a href="#">
              <div id="shiga">
                <p>滋賀</p>
              </div>
            </a>
            <a href="#">
              <div id="osaka">
                <p>大阪</p>
              </div>
            </a>
            <a href="#">
              <div id="nara">
                <p>奈良</p>
              </div>
            </a>
            <a href="#">
              <div id="mie">
                <p>三重</p>
              </div>
            </a>
            <a href="#">
              <div id="wakayama">
                <p>和歌山</p>
              </div>
            </a>
            <a href="#">
              <div id="hyougo">
                <p>兵庫</p>
              </div>
            </a>
          </div>
        </div>

        <div id="tyugoku" className="clearfix">
          <p className="area-title">中国</p>
          <div className="area">
            <a href="#">
              <div id="tottori">
                <p>鳥取</p>
              </div>
            </a>
            <a href="#">
              <div id="okayama">
                <p>岡山</p>
              </div>
            </a>
            <a href="#">
              <div id="shimane">
                <p>島根</p>
              </div>
            </a>
            <a href="#">
              <div id="hiroshima">
                <p>広島</p>
              </div>
            </a>
            <a href="#">
              <div id="yamaguchi">
                <p>山口</p>
              </div>
            </a>
          </div>
        </div>

        <div id="shikoku" className="clearfix">
          <p className="area-title">四国</p>
          <div className="area">
            <a href="#">
              <div id="kagawa">
                <p>香川</p>
              </div>
            </a>
            <a href="#">
              <div id="ehime">
                <p>愛媛</p>
              </div>
            </a>
            <a href="#">
              <div id="tokushima">
                <p>徳島</p>
              </div>
            </a>
            <a href="#">
              <div id="kouchi">
                <p>高知</p>
              </div>
            </a>
          </div>
        </div>

        <div id="kyusyu" className="clearfix">
          <p className="area-title">九州・沖縄</p>
          <div className="area">
            <a href="#">
              <div id="fukuoka">
                <p>福岡</p>
              </div>
            </a>
            <a href="#">
              <div id="saga">
                <p>佐賀</p>
              </div>
            </a>
            <a href="#">
              <div id="nagasaki">
                <p>長崎</p>
              </div>
            </a>
            <a href="#">
              <div id="oita">
                <p>大分</p>
              </div>
            </a>
            <a href="#">
              <div id="kumamoto">
                <p>熊本</p>
              </div>
            </a>
            <a href="#">
              <div id="miyazaki">
                <p>宮崎</p>
              </div>
            </a>
            <a href="#">
              <div id="kagoshima">
                <p>鹿児島</p>
              </div>
            </a>
            <a href="#">
              <div id="okinawa">
                <p>沖縄</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
