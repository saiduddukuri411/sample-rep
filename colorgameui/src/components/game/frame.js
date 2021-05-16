// import styling
import "./style/frame.scss";

const gameFrame = () => {
  let wins = 0, losses = 0;
  return (
    <>
      <div align="right">
        <input type="button" value="Logout" />
      </div>
      <div class="container">
        <h1>Names Colour Grid</h1>
        <div class="flex-container">
          <div>Wins:{wins}</div>
          <div>Losses:{losses}</div>
        </div>
        <div class="grid-container">
          <div class="color-1"></div>
          <div class="color-2"></div>
          <div class="find"></div>
          <div class="color-3"></div>
          <div class="color-4"></div>
          <div class="color-5"></div>
          <div class="color-6"></div>
        </div>
      </div>
    </>
  );
};

export default gameFrame;
