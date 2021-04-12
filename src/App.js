import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <StarRating style={{ backgroundColor: "lightgreen"}} totalStars={10} />  
    </div>
  );
}

export default App;
