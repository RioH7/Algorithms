//Given a staircase of 'n' steps, find the no. of distinct ways of climbing to the top by climbing 1 or 2 steps at a time

//Climbing to step n means climbing from step n-1 or n-2
//Calculate the ways to n-1 and n-2 steps and sum them

const climbingStaircase = n => {
    let ways = 0;
    if(n === 1) return 1;
    if(n )
}

// 1, 1 (1)
// 2, 2 (1, 1) & (2)
// 3, 3 (1, 1, 1) & (1, 2) & (2, 1)
// 4, 5 (1, 1, 1, 1) & (1, 1, 2) & (1, 2, 1) & (2, 1, 1) & (2, 2)

