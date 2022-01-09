function findMajority(arr1 , n)
{
    let maxCount = 0;
    let index = 0;

    for(let i = 0; i < n; i++)
    {
        let count = 0;
        for (let j = 0; j < n; j++)
        {
            if(arr1[i] == arr1[j])
            count++;
        }
        if(count > maxCount)
        {
            maxCount = count;
            index = i;
        }
    }
    if(maxCount > n / 2)
    console.log(" this array contains a majority and it is " + arr1[index]);
    else 
    console.log("No Majority Element");
}

let arr1 = [3,1,3,4,4,5,3,5,3,3,3,6,3];

let n = arr1.length;

findMajority(arr1, n);




