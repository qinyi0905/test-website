<template>
  <div class="anime-music-site">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="logo">
        <img src="/anime-logo.png" alt="Anime Music Logo" class="logo-img" />
        <h1 class="site-title">动漫音乐馆</h1>
      </div>
      <nav class="nav-menu">
        <router-link to="/" class="nav-item">首页</router-link>
        <a href="#" class="nav-item">动漫歌曲</a>
        <a href="#" class="nav-item">游戏音乐</a>
        <a href="#" class="nav-item">排行榜</a>
        <a href="#" class="nav-item">我的收藏</a>
      </nav>
      <div class="user-actions">
        <button class="login-btn">登录</button>
        <button class="register-btn">注册</button>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <div class="hero-section">
        <div class="hero-text">
          <h2 class="hero-title">发现属于你的二次元旋律</h2>
          <p class="hero-subtitle">收录最全的动漫、游戏音乐资源</p>
          <div class="search-box">
            <input type="text" placeholder="搜索你喜欢的动漫音乐..." class="search-input" />
            <button class="search-button">🔍</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="anime-character"></div>
        </div>
      </div>

      <section class="music-categories">
        <h2 class="section-title">音乐分类</h2>
        <div class="category-grid">
          <div class="category-card" v-for="category in categories" :key="category.name">
            <div class="category-icon">{{ category.icon }}</div>
            <h3 class="category-name">{{ category.name }}</h3>
            <p class="category-desc">{{ category.description }}</p>
          </div>
        </div>
      </section>

      <section class="trending-music">
        <h2 class="section-title">热门推荐</h2>
        <div class="music-list">
          <div class="music-item" v-for="song in trendingSongs" :key="song.id">
            <div class="album-cover">
              <img :src="song.cover" :alt="song.title" />
            </div>
            <div class="music-info">
              <h3 class="song-title">{{ song.title }}</h3>
              <p class="artist">{{ song.artist }}</p>
              <p class="anime-name">{{ song.anime }}</p>
            </div>
            <div class="play-button">▶️</div>
          </div>
        </div>
      </section>
    </main>

    <!-- 底部 -->
    <footer class="footer">
      <div class="footer-content">
        <p>© 2023 动漫音乐馆 - 专注于二次元音乐分享</p>
        <div class="social-links">
          <a href="#">微博</a>
          <a href="#">B站</a>
          <a href="#">QQ群</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      categories: [
        {
          icon: "オープニング",
          name: "OP/ED",
          description: "动画片头片尾曲"
        },
        {
          icon: "ゲーム",
          name: "游戏音乐",
          description: "经典游戏原声带"
        },
        {
          icon: "キャラクター",
          name: "角色歌",
          description: "角色专属歌曲"
        },
        {
          icon: "ボーカロイド",
          name: "VOCALOID",
          description: "虚拟歌手作品"
        }
      ],
      trendingSongs: [
        {
          id: 1,
          title: "Again",
          artist: "YUI",
          anime: "钢之炼金术师",
          cover: "/again.jpg"
        },
        {
          id: 2,
          title: "Silhouette",
          artist: "KANA-BOON",
          anime: "火影忍者",
          cover: "/silhouette.jpg"
        },
        {
          id: 3,
          title: "Unravel",
          artist: "TK from 凛として時雨",
          anime: "东京喰种",
          cover: "/unravel.jpg"
        },
        {
          id: 4,
          title: "Gurenge",
          artist: "LiSA",
          anime: "鬼灭之刃",
          cover: "/gurenge.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

.anime-music-site {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Noto Sans JP', sans-serif;
  color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  width: 40px;
  height: 40px;
}

.site-title {
  font-size: 1.8rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.nav-menu {
  display: flex;
  gap: 25px;
}

.nav-item {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 20px;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.2);
}

.user-actions {
  display: flex;
  gap: 10px;
}

.login-btn, .register-btn {
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-btn {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.register-btn {
  background: #ff6b6b;
  color: white;
}

.login-btn:hover, .register-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
}

.hero-section {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.hero-text {
  flex: 1;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.search-box {
  display: flex;
  max-width: 500px;
}

.search-input {
  flex: 1;
  padding: 15px 20px;
  border: none;
  border-radius: 30px 0 0 30px;
  font-size: 1rem;
  outline: none;
}

.search-button {
  padding: 15px 25px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.search-button:hover {
  background: #ff5252;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.anime-character {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 100%);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.anime-character::before {
  content: "";
  position: absolute;
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 50%;
  top: 50px;
  left: 50px;
  box-shadow: 80px 0 0 #fff;
}

.anime-character::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  background: #333;
  border-radius: 50%;
  top: 70px;
  left: 70px;
  box-shadow: 80px 0 0 #333;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: #ff6b6b;
  margin: 10px auto;
  border-radius: 2px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 60px;
}

.category-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.category-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.category-name {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.category-desc {
  opacity: 0.8;
}

.music-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.music-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.music-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

.album-cover {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(45deg, #a18cd1 0%, #fbc2eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.album-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.music-info {
  flex: 1;
}

.song-title {
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.artist, .anime-name {
  font-size: 0.9rem;
  opacity: 0.8;
}

.play-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ff6b6b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.footer {
  margin-top: 60px;
  padding: 30px 0;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.social-links {
  margin-top: 15px;
}

.social-links a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.social-links a:hover {
  opacity: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 15px;
  }
  
  .nav-menu {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  
  .search-box {
    margin: 0 auto;
  }
}
</style>