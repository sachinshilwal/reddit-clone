<template>
  <div class="header">
    <div class="header__logo" @click="goToHome()">
      <img src="../assets/img/reddit-logo.png" alt="" />
      <span>reddit</span>
    </div>

    <div class="input__section">
      <div class="input__section__left">
        <i class="fas fa-igloo"></i>
        <span>Home</span>
      </div>
      <i class="fas fa-sort-down"></i>
    </div>

    <div class="search__bar">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Search" style="background-color: rgb(26, 25, 25); color: rgb(209, 202, 202)" />
    </div>

    <div class="icons__left">
      <i class="fas fa-chart-line"></i>
      <i class="fas fa-chart-bar"></i>
      <i class="fas fa-columns"></i>
    </div>
    <div class="icons__right">
      <i class="fas fa-comment-dots"></i>
      <i class="fas fa-envelope"></i>
      <i class="fas fa-pencil-alt"></i>
    </div>

    <div class="get__coins">
      <img src="../assets/img/coin.png" height="20px" alt="" />
      <span>Get Coins</span>
    </div>

    <div class="profile__select" @click="popUp">
      <div v-if="!isSignedIn" style="width: 100%;">
         <LoginControl />
      </div>
      <div v-else><Profile /></div>
      
      <i class="fas fa-sort-down"></i>
    </div>
    <span class="profileInfo" style=" border: 1px solid white; " v-if="popUpValue">
      <div style="font-size: 1em; margin-top:10px"> <a style="text-decoration:none" :href="`http://reddit.com/user/${this.$store.state.user.name}`" target="_blank" rel="noopener noreferrer">Profile On Reddit</a> </div>
      <div @click="logOut" style="margin-top:10px; cursor: pointer;">Sign Out</div>
    </span>
  </div>
  
</template>

<script>
import LoginControl from './LoginControl.vue'
import Profile from './Profile.vue'

export default {
  components:{
    LoginControl,
    Profile
  },
  mounted(){
    console.log(this.$store.state.user)
  },
  data(){
    return{
      userInfo: {
        name: 'Guest',
        karma: '0',},
      popUpValue: false,
    }
  },
  methods: {
    goToHome() {
      this.$emit("goToHome", true);
    },
    popUp(){
      console.log('pop up');
      this.popUpValue = !this.popUpValue;
    },
    logOut(){
      localStorage.removeItem('userinfo');
      this.$router.go('/');
      console.log('logged out');
    }
  },
  computed:{
    isSignedIn(){
      return this.$store.state.isLoggedIn
    }
  },
  };
</script>

<style>
.header {
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
  z-index: 9999;
}
.profileInfo{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 15%;
  background-color: rgb(0, 0, 0);
  color: rgb(209, 202, 202);
  position: absolute;
  top: 50px;
  right: 0;
  margin-right:11%;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.5s;
}
.header__logo {
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: space-evenly;
  color: white;
  cursor: pointer;
}

.header__logo span {
  font-size: 20px;
}

.header__logo img {
  height: 30px;
  object-fit: contain;
  border-radius: 15px;
}

.input__section .input__section__left span {
  margin: 0 5px;
}

.input__section,
.search__bar input {
  margin-right: 10px;
  border: none;
  width: 250px;
  height: 5vh;
}

.input__section {
  padding: 10px;
  display: flex;
  font-size: 13px;
  align-items: center;
  flex-shrink: 1;
  justify-content: space-between;
}
.fa-igloo {
  color: #0079d3;
}

.input__section__left {
  display: flex;
  align-items: center;
  flex: 0.4;
  margin: 0 10px;
  justify-content: space-evenly;
}

.search__bar {
  background-color: rgb(26, 25, 25);
  padding: 0 15px;
  border-radius: 5px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e7;
  flex: 1;
  min-width: 80px;
}

.search__bar input {
  min-width: 60px;
  height: 5vh;
  margin-left: 10px;
  background-color: #f8f8f8;
  padding: -10px;
  font-size: 13px;
  width: 280px;
}

.search__bar input:focus {
  outline: none;
}

.icons__left,
.icons__right {
  display: flex;
  height: 80%;
  width: 130px;
  align-items: center;
  justify-content: space-around;
}
.icons__left i,
.icons__right i {
  padding: 10px;
}

.icons__left i:hover,
.icons__right i:hover {
  background-color: #c8c9ca;
  cursor: pointer;
}

.icons__left {
  border-right: 1px solid #dae0e6;
}


.get__coins {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ddbd37;
  padding: 5px 10px;
  border-radius: 20px;
  width: 90px;
  flex-shrink: 0;
}

.get__coins span {
  font-size: 12px;
}

.profile__select {
  margin-left: 10px;
  display: flex;
  height: auto;
  flex: 1;
  padding: 1px;
  /* justify-content: space-between; */
  margin-right: 20px;
}

.profile__select:hover {
  padding: 9px;
  border: 1px solid #edeff1;
  border-radius: 5px;
  cursor: pointer;
}

.profile__details {
  display: flex;
  align-items: center;
}

.profile__select .profile__details .user__profile {
  line-height: 2vh;
  font-size: 12px;
  margin-left: 10px;
  display: flex;
  height: 6vh;
  flex-direction: column;
  justify-content: space-around;
}

.profile__select .profile__details .user__profile .karma__details {
  display: flex;
  font-size: 11px;
  color: #c8c9ca;
  width: 80px;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 1000px) {
  .profile__select .profile__details .user__profile {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .icons__left {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .get__coins {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .input__section .input__section__left span,
  .input__section > i {
    display: none;
  }
}

@media screen and (max-width: 460px) {
  .header .header__logo span {
    display: none;
  }
}

@media screen and (max-width: 380px) {
  .icons__right {
    display: none;
  }

  .input__section .input__section__left span,
  .input__section > i {
    display: block;
  }
}
</style>
