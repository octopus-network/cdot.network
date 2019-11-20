<template>
  <div class="box">
    <div class="home">
      <header>
        <div class="ulistBox">
          <ul class="ulist">
            <li @click="clickToGitHub">GitHub</li>
            <li @click="clickToContact">Whitepaper</li>
            <li @click="clickToContact">Follow Us</li>
            <span>EN</span>
          </ul>
        </div>
        <div class="headerCodt">
          <img src="../assets/images/banner_img_logo_default.png" alt />
        </div>
        <div class="headerNetwork">
          our earth is only one polka dot among a million stars in the cosmos
        </div>
        <div class="headerBottom">
          <p>- Yayoi Kusama</p>
        </div>
      </header>
      <div class="postionButton">
        <div class="ButtonCdot">cdot</div>
        <div class="ButtonLearn">Learn more</div>
      </div>
      <div class="navconent">
        <p class="navtop">A General-Purpose Hub for Ledger Interoperation</p>
        <div class="navcard">
          <div class="cartLess">
            <dl>
              <dt>Seamless Interoperation</dt>
              <dd>
                <img
                  src="../assets/images/content1_icon_left_default.png"
                  alt
                />
              </dd>
            </dl>
            <p class="cartline"></p>
            <p class="LedgersConet">
              Ledgers of any type may get involved effortlessly in this internet
              of value.
            </p>
            <p class="learnMore">
              <span>Learn more</span>
              <i class="fa fa-long-arrow-right shape"></i>
            </p>
          </div>
          <div class="cartLess">
            <dl>
              <dt>Long-term Sustainability</dt>
              <dd>
                <img
                  src="../assets/images/content1_icon_center_default.png"
                  alt
                />
              </dd>
            </dl>
            <p class="cartline"></p>
            <p class="LedgersConet">
              A mechanism ensures all participants are distributed wealth
              fairly.
            </p>
            <p class="learnMore">
              <span>Learn more</span>
              <i class="fa fa-long-arrow-right shape"></i>
            </p>
          </div>
          <div class="cartLess">
            <dl>
              <dt>Settlement Assurance</dt>
              <dd>
                <img
                  src="../assets/images/content1_icon_right_default.png"
                  alt
                />
              </dd>
            </dl>
            <p class="cartline"></p>
            <p class="LedgersConet">
              When risk becomes a measurable estimate, all transactions could be
              settled with confidence.
            </p>
            <p class="learnMore">
              <span>Learn more</span>
              <i class="fa fa-long-arrow-right shape"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="Ledgerbox">
        <div class="ledgertitle">
          <p>How You Can Get Involved</p>
          <div class="Gradation">
            <img src="../assets/images/content3_icon_bg_default.png" alt />
          </div>
        </div>
      </div>
      <div class="section">
        <div class="Latest">
          <p>Latest News</p>
        </div>
        <div class="sectionBottom">
          <div class="secationCart">
            <div class="cartone">
              <img
                src="../assets/images/content3_img_fill1_default.png"
                class="marshalling"
                alt
              />
              <div class="LouisLiu">
                <span class="borderLeft">Louis Liu</span>
                <span class="VerticalLine">|</span>
                <span class="louisTime">2019-04-30 11:34</span>
              </div>
              <div class="Describe">
                Describe the Polkadot architecture in ten thousand words
              </div>
              <div class="Teacher">
                Teacher liu yi deeply discussed the current situation of DApp
                developmentthree expansion……
              </div>
              <div class="learnArrow">
                <span>Learn more</span>
                <i class="fa fa-long-arrow-right arrow"></i>
              </div>
            </div>
            <div class="carttwo">
              <img
                src="../assets/images/content3_img_fill2_default.png"
                class="marshalling"
                alt
              />
              <div class="LouisLiu">
                <span class="borderLeft">Louis Liu</span>
                <span class="VerticalLine">|</span>
                <span>2019-04-30 11:34</span>
              </div>
              <div class="Describe">
                Pay attention to "application governance," which is DApp's
                Achilles heel
              </div>
              <div class="Teacher">
                Let's start with the meaning of blockchain. One of the biggest
                benefits of blockchain is that it reduces……
              </div>
              <div class="learnArrow">
                <span>Learn more</span>
                <i class="fa fa-long-arrow-right arrow"></i>
              </div>
            </div>
            <div class="cartthree">
              <img
                src="../assets/images/content3_img_fill3_default.png"
                class="marshalling"
                alt
              />
              <div class="LouisLiu">
                <span class="borderLeft">Louis Liu</span>
                <span class="VerticalLine">|</span>
                <span>2019-04-30 11:34</span>
              </div>
              <div class="Describe">
                A brief history of Web3 ideas -- to real blockchain
                entrepreneurs
              </div>
              <div class="Teacher">
                From the open society to the cypherpunk movement, from bitcoin
                to ethereum to Polkadot, the……
              </div>
              <div class="learnArrow">
                <span>Learn more</span>
                <i class="fa fa-long-arrow-right arrow"></i>
              </div>
            </div>
            <div class="cartfoure">
              <img
                src="../assets/images/content3_img_fill4_default.png"
                class="marshalling"
                alt
              />
              <div class="LouisLiu">
                <span class="borderLeft">Louis Liu</span>
                <span class="VerticalLine">|</span>
                <span>2019-04-30 11:34</span>
              </div>
              <div class="Describe">
                Encryption protocol governance: make good use of the force of
                evolution……
              </div>
              <div class="Teacher">
                We Chinese coin circle of retail investors used to laugh at
                themselves, leek, move bricks, helpless pain and so on……
              </div>
              <div class="learnArrow">
                <span>Learn more</span>
                <i class="fa fa-long-arrow-right arrow"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="footerLeft">
          <img
            src="../assets/images/footer_img_logo_default.png"
            class="footerlogo"
            alt
          />
          <div class="footerNet">Cdot Network Foundation</div>
        </div>
        <div class="footerRight">
          <div class="footerFollow">Follow Us</div>
          <div class="footerRightImg">
            <font-awesome-icon
              @click="clickToContact"
              :icon="['fab', 'twitter']"
              size="2x"
              :style="{ color: 'white' }"
            />
            <font-awesome-icon
              @click="clickToGitHub"
              :icon="['fab', 'github']"
              size="2x"
              :style="{ color: 'white' }"
            />
            <font-awesome-icon
              @click="clickToContact"
              :icon="['fab', 'weixin']"
              :style="{ color: 'white' }"
            />
            <font-awesome-icon
              @click="clickToContact"
              :icon="['fas', 'envelope']"
              size="2x"
              :style="{ color: 'white' }"
            />
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    clickToGitHub() {
      window.location.href = 'https://github.com/cdot-network '
    },
    clickToContact() {
      this.$router.push({ path: '/contact' })
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped lang="css">
@import '../assets/css/main.css';
.box {
  min-width: 1920px;
  height: auto;
  display: fixed;
  overflow-y: scroll;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin: 0 auto;
}
.home {
  min-width: 1920px;
  height: auto;
  text-rendering: none;
  list-style: none;
  background: rgba(255, 255, 255, 1);
  position: relative;
}
header {
  width: 100%;
  height: 900px;
  background: url('../assets/images/banner_img_bg_default.png') no-repeat;
  background-size: cover;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.ulistBox {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
}
.ulist {
  margin-right: 190px;
  display: flex;
  margin-top: 32px;
  height: 100px;
  color: #fff;
}
.ulist li {
  height: 33px;
  font-size: 32px;
  font-family: 'Roboto-Regular, Roboto';
  color: #dedede;
  line-height: 33px;
  margin-right: 99px;
  list-style: none;
}
.ulist li:hover,
.ulist span:hover {
  color: #fff;
  cursor: pointer;
}
.ulist span {
  width: 57px;
  height: 32px;
  background: rgba(175, 194, 228, 1);
  border-radius: 2px;
  opacity: 0.9;
  display: inline-block;
  font-size: 20px;
  font-family: 'Roboto-Regular, Roboto';
  text-align: center;
  line-height: 32px;
  color: #dedede;
}
.headerCodt {
  width: 300px;
  height: 272px;
  margin: 0 auto;
}
.headerCodt img {
  width: 300px;
  margin-top: 158px;
}
.headerNetwork {
  width: 1191px;
  height: 186px;
  font-size: 52px;
  font-family: 'Roboto-Light, Roboto';
  color: rgba(255, 255, 255, 1);
  line-height: 78px;
  letter-spacing: 1px;
  margin: 0 auto;
}
.headerBottom {
  width: 466px;
  height: 29px;
  font-size: 34px;
  font-family: 'Roboto-Regular, Roboto';
  color: rgba(255, 255, 255, 1);
  line-height: 29px;
  margin: 0 auto;
}
.headerBottom p {
  margin-top: 25px;
}
.postionButton {
  width: 288px;
  height: 79px;
  background: #d0343a;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.postionButton:hover {
  background: #bc2e33;
  cursor: pointer;
}
.postionButton .ButtonCdot {
  width: 288px;
  height: 39px;
  text-align: center;
  line-height: 39px;
  font-size: 26px;
  font-family: 'Roboto-Regular, Roboto';
  color: #fff;
}
.postionButton .ButtonLearn {
  height: 39px;
  text-align: center;
  line-height: 33px;
  font-size: 24px;
  font-family: 'Roboto-Regular, Roboto';
  color: #fff;
}
.navconent {
  width: 100%;
  height: 1018px;
  display: flex;
  flex-direction: column;
}
.cartLess {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}
.cartLess dl {
  display: flex;
  width: 100%;
  margin-bottom: 11px;
}
.cartLess dl dt {
  width: 303px;
  height: 116px;
  font-size: 42px;
  font-family: 'Roboto-Medium, Roboto';
  color: rgb(2, 1, 1);
  line-height: 58px;
  margin-top: 56x;
  margin-left: 40px;
  text-align: left;
}
.cartLess dl dd {
  width: 111px;
  height: 111px;
}
.cartLess dl dd img {
  width: 100%;
}
.cartline {
  width: 100px;
  height: 3px;
  background: rgba(85, 53, 128, 1);
  margin-left: 40px;
}
.learnMore {
  margin-top: 68px;
  margin-left: 45px;
  text-align: left;
  display: flex;
}
.learnMore span {
  height: 36px;
  font-size: 20px;
  font-family: 'Roboto-Regular, Roboto';
  color: rgba(85, 53, 128, 1);
  line-height: 36px;
  color: #553580;
}
.learnMore .shape {
  font-size: 30px;
  height: 30px;
  width: 50px;
  text-align: center;
  color: #553580;
  line-height: 40px;
  margin-left: 5px;
}
.learnMore span:hover,
.learnMore .shape:hover {
  color: #371761;
  cursor: pointer;
}
.LedgersConet {
  width: 366px;
  height: 176px;
  font-size: 28px;
  font-family: 'Roboto-Regular, Roboto';
  color: rgba(102, 102, 102, 1);
  line-height: 44px;
  text-align: left;
  margin-left: 40px;
}
.ledgertitle {
  width: 599px;
  height: 69px;
  margin: 0 auto;
}
.ledgertitle p {
  font-size: 40px;
  font-family: 'Roboto-Regular, Roboto';
  color: rgba(213, 213, 213, 1);
  line-height: 69px;
  margin-top: 60px;
}
.Gradation {
  min-width: 1136px;
  height: 736px;
  margin-left: -300px;
}
.Gradation img {
  width: 100%;
  height: 100%;
}

.navtop {
  width: 1175px;
  height: 69px;
  font-size: 49px;
  font-family: 'Roboto-Regular, Roboto';
  color: rgba(0, 0, 0, 1);
  line-height: 69px;
  margin: 0 auto;
  margin-top: 155px;
  margin-bottom: 107px;
}
.navcard {
  display: flex;
  min-width: 1424px;
  min-height: 600px;
  margin: 0 auto;
}
.navcard .cartLess {
  width: 460px;
  min-height: 580px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: 4px 4px 10px #ccc;
  margin-left: 66px;
}
.Ledgerbox {
  width: 100%;
  height: 1018px;
  background: #271245;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.section {
  width: 100%;
  min-height: 1018px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 1);
}
.Latest {
  width: 100%;
  height: 724px;
  background: rgba(255, 255, 255, 1);
}
.Latest p {
  width: 287px;
  height: 69px;
  font-size: 49px;
  font-family: 'Roboto-Regular, Roboto';
  color: rgba(34, 34, 34, 1);
  line-height: 69px;
  margin: 0 auto;
  margin-top: 111px;
}
.sectionBottom {
  width: 100%;
  height: 441px;
  background: rgba(243, 242, 250, 1);
  display: flex;
  justify-content: space-around;
}
.secationCart {
  display: flex;
  min-width: 1471px;
  height: 790.5px;
  z-index: 99;
  margin-top: -450px;
}
.secationCart .cartone,
.carttwo,
.cartthree,
.cartfoure {
  width: 528px;
  min-height: 790.5;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-left: 44px;
}
.LouisLiu {
  min-width: 302px;
  height: 27px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  margin-top: 13px;
}
.LouisLiu .VerticalLine {
  margin: 0 16px;
}
.LouisLiu span {
  font-size: 16px;
  font-family: 'Roboto-Regular, Roboto';
  color: rgba(102, 102, 102, 1);
  line-height: 27px;
}

.Describe {
  min-width: 302px;
  min-height: 118.5px;
  font-size: 30px;
  font-family: 'Roboto-Medium, Roboto';
  color: rgba(0, 0, 0, 1);
  line-height: 40.5px;
  text-align: left;
  margin-top: 15px;
  padding: 0 25px;
}
.Teacher {
  min-width: 302px;
  min-height: 66px;
  font-size: 22.5px;
  font-family: 'Roboto-Regular, Roboto';
  color: rgba(102, 102, 102, 1);
  line-height: 33px;
  text-align: left;
  padding: 0 25px;
  margin-top: 25px;
}
.learnArrow {
  min-width: 302px;
  display: flex;
  padding: 0 25px;
  margin-top: 19.5px;
}
.learnArrow span {
  height: 36px;
  font-size: 24px;
  font-family: 'Roboto-Regular, Roboto';
  color: #553580;
  text-align: left;
  line-height: 36px;
}
.learnArrow span:hover,
.learnArrow .arrow:hover {
  color: #371376;
  cursor: pointer;
}
.learnArrow .arrow {
  font-size: 30px;
  line-height: 40px;
  color: #553580;
  margin-left: 15px;
}
.marshalling {
  width: 100%;
}
footer {
  width: 100%;
  height: 426px;
  background: #3c144a;
  display: flex;
}
.footerLeft {
  width: 50%;
  height: 100%;
}
.footerlogo {
  margin-top: 105px;
  width: 300px;
}
.footerNet {
  font-size: 30px;
  font-family: 'Roboto-Regular, Roboto';
  color: rgba(157, 146, 169, 1);
  line-height: 42px;
  margin-top: 143px;
}
.footerRight {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.footerFollow {
  margin-top: 78px;
  font-size: 40px;
  width: 100%;
  height: 55px;
  font-family: 'Roboto-Regular, Roboto';
  color: #d0c3df;
  line-height: 55px;
  text-align: left;
}
.footerFollow:hover,
.fa:hover {
  color: #f0e2ff;
  cursor: pointer;
}
.footerRightImg {
  flex: 1;
  display: flex;
  display: block;
  margin-top: 54px;
  text-align: left;
}
.footerRightImg .fa-weixin {
  font-size: 50px;
}
.footerEnglish {
  width: 124px;
  height: 41px;
  background: rgba(208, 195, 223, 1);
  border-radius: 2px;
  opacity: 0.56;
  text-align: center;
  line-height: 41px;
  margin-top: 106px;
  margin-left: 150px;
}
</style>
