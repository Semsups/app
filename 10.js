function squareSum(numbers){
    return numbers.reduce(function(sum, n){
    return (n*n) + sum;
    }, 0)
    }

    /** Complete the square sum function so that it squares each number passed to it, and then sums the results together. */