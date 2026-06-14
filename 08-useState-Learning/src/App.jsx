import React, { use, useState } from 'react'

const App = () => {

	const indianCricketers = [
		{
			name : "Team-India",
			role : "Playing-11 Cricketers",
			description : "These 11 players are the ones who is going to play todays Match "		
		},
		{
			name: "Rohit Sharma",
			role: "Opening Batsman",
			description:
				"Rohit Sharma is one of India's most successful opening batsmen and the captain of the Indian cricket team. Known for his elegant stroke play and ability to score big centuries, he is the only player with three double centuries in ODI cricket."
		},
		{
			name: "Virat Kohli",
			role: "Top-Order Batsman",
			description:
				"Virat Kohli is regarded as one of the greatest batsmen of the modern era. He has scored thousands of runs across all formats and is famous for his consistency, fitness, and aggressive approach to the game."
		},
		{
			name: "Shubman Gill",
			role: "Opening Batsman",
			description:
				"Shubman Gill is one of India's brightest young batting talents. He has impressed with his technique and composure, scoring centuries in international cricket and becoming a regular member of the Indian team."
		},
		{
			name: "KL Rahul",
			role: "Wicketkeeper-Batsman",
			description:
				"KL Rahul is a versatile batsman who can open the innings or play in the middle order. His ability to adapt to different formats and his wicketkeeping skills make him an important asset for India."
		},
		{
			name: "Rishabh Pant",
			role: "Wicketkeeper-Batsman",
			description:
				"Rishabh Pant is known for his fearless batting and match-winning performances. He has played several memorable innings for India, especially in Test cricket, and is considered one of the most exciting wicketkeepers in the world."
		},
		{
			name: "Hardik Pandya",
			role: "All-Rounder",
			description:
				"Hardik Pandya is a dynamic all-rounder who contributes with both bat and ball. His explosive batting, useful seam bowling, and athletic fielding have helped India win many crucial matches."
		},
		{
			name: "Ravindra Jadeja",
			role: "All-Rounder",
			description:
				"Ravindra Jadeja is one of the finest all-rounders in world cricket. He is an excellent left-arm spinner, a dependable batsman, and an outstanding fielder known for his quick reflexes and accurate throws."
		},
		{
			name: "Jasprit Bumrah",
			role: "Fast Bowler",
			description:
				"Jasprit Bumrah is India's premier fast bowler and is famous for his unique bowling action. His ability to bowl yorkers, generate pace, and perform under pressure makes him one of the best bowlers in the world."
		},
		{
			name: "Mohammed Shami",
			role: "Fast Bowler",
			description:
				"Mohammed Shami is a skilled fast bowler known for his seam movement and wicket-taking ability. He has been a key member of India's bowling attack across formats and has delivered many match-winning spells."
		},
		{
			name: "Kuldeep Yadav",
			role: "Spin Bowler",
			description:
				"Kuldeep Yadav is a left-arm wrist spinner who has troubled batsmen around the world with his variations. He has played an important role in India's limited-overs and Test cricket successes."
		},
		{
			name: "Yuzvendra Chahal",
			role: "Leg-Spin Bowler",
			description:
				"Yuzvendra Chahal is one of India's most successful white-ball spinners. Known for his clever leg-spin bowling and ability to take wickets in the middle overs, he has been a regular performer for India."
		}
	];

	const [index,setIndex] = useState(0);
	
	function slideNext(){
			setIndex(ind => (ind+1)%indianCricketers.length )
	}

	function slidePrev(){
			if(index == 0)
				setIndex(indianCricketers.length - 1)
			
			else
				setIndex(ind => ind-1)		
	}


  return (
	 <div>

		<div className="card">
			<h1>{indianCricketers[index].name}</h1>
			<h3>{indianCricketers[index].role}</h3>
			<h3>{indianCricketers[index].description}</h3>

			<button onClick={slidePrev}  > Swipe-Left   </button>

			<button onClick={slideNext} > Swipe-Right  </button>
		</div>

		
		
	 </div>
  )
}

export default App
