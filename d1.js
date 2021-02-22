//consider the graph attached in pdf
let noofVertices;
let Graph=[];
noofVertices=5;
console.log(noofVertices);
Graph=[[0,10,0,30,100],[10,0,50,0,0],[0,50,0,20,10],[30,0,20,0,60],[100,0,10,60,0]];
console.log(Graph);
//input starting node 0 in grraph which i consider strting node 0
let startingNode=0;
console.log('Starting Node',startingNode);

//cost matrix for path values;
    let costMatrix=[[],[],[],[],[],[]];
        let distance=[];
    let visited=[];
    let pred=[];
    let i,j,mindIst,nextNode;
    for(i=0;i<noofVertices;i++)
{
    for(j=0;j<noofVertices;j++)
    {
       if(Graph[i][j]==0) 
       {
        costMatrix[i][j]=Infinity;

       }
       else{
           costMatrix[i][j]=Graph[i][j];
       }
    }
}
for(i=0;i<noofVertices;i++)
{
    distance[i]=costMatrix[startingNode][i];
    pred[i]=startingNode;
    visited[i]=0;

}
distance[startingNode]=0;
visited[startingNode]=1;
count=1;
while(count<noofVertices-1)
{
mindIst=Infinity;
for(i=0;i<noofVertices;i++)
{
    if(distance[i]<mindIst && !visited[i])
    {
        mindIst=distance[i];
        nextNode=i;

    }
}
visited[nextNode]=1;
for(i=0;i<noofVertices;i++)
{
    if(!visited[i])
    {
        if((mindIst+costMatrix[nextNode][i])<distance[i])
        {
            distance[i]=mindIst+costMatrix[nextNode][i];
            pred[i]=nextNode;
        }
    }
}
count++;

}
for(i=0;i<noofVertices ;i++)
{
if(i!=startingNode)
{
    console.log('distance of node '+i+'is'+" "+distance[i]);
    console.log('path is');
    console.log(i);
  //  console.log(distance[i]);
   // console.log('path is',i);
    j=i;
    do{
        j=pred[j];
        console.log('<-',j);
    }
    while(j!=startingNode);
}
}

