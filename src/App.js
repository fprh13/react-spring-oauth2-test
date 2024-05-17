import './App.css';

const onNaverLogin = () => {
  window.location.href = 'http://localhost:8080/oauth2/authorization/naver';
};

const onKakaoLogin = () => {
  window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
};
const onGoogleLogin = () => {
  window.location.href = 'http://localhost:8080/oauth2/authorization/google';
};

function App() {
  return (
    <>
      <h1>CARUMUCH 카우머치 테스트</h1>
      <div className="wrapper">
        <img src="./pedro.png" className="pedro"></img>
      </div>
      <h1>OAuth2 Login & SignUp 🔐</h1>

      <button onClick={onNaverLogin} className="naver">
        Naver
      </button>
      <button onClick={onKakaoLogin} className="kakao">
        Kakao
      </button>
      <button onClick={onGoogleLogin} className="google">
        Google
      </button>
    </>
  );
}

export default App;
