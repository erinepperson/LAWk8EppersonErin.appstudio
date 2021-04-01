
var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
 
  for (i = 0; i < dessertList.length; i++) 
        drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(s){
// this 'if' kicks user out if they  just clicked on control 
// but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
        
     drpDesserts.value = s     // make dropdown show choice the user made
    lblDesserts.value = `You picked ${s} -that is a great choice!.`
  }
}


btnNextPage.onclick=function(){
ChangeForm(describeYou)
}
