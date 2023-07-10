import React from 'react';

const Login = () => {
  // 깃허브 로그인 버튼 클릭 시 실행되는 함수
  const handleGitHubLogin = () => {
    // GitHub 로그인 처리 로직
    // ...
  };

  // 카카오 로그인 버튼 클릭 시 실행되는 함수
  const handleKakaoLogin = () => {
    // Kakao 로그인 처리 로직
    // ...
  };

  // 구글 로그인 버튼 클릭 시 실행되는 함수
  const handleGoogleLogin = () => {
    // Google 로그인 처리 로직
    // ...
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleGitHubLogin}>GitHub 로그인</button>
      <button onClick={handleKakaoLogin}>카카오 로그인</button>
      <button onClick={handleGoogleLogin}>구글 로그인</button>
    </div>
  );
};

export default Login;
