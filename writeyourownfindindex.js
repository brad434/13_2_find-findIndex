//

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

function findUserByUsername(arr,username){
    return arr.find(function(el){
        return el.username === username;
    })
};

function removeUser(arr,username){
   
    let foundIndex = arr.findIndex(function(el){
        return el.username === username;
    });

    if(foundIndex === -1) return;

    return arr.splice(foundIndex,1)[0];
}