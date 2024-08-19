// *************important concept about virtual dom***************//

// 1- create root jo ha naw ye ek dom like tree structure create krta ha jese browser k pas dom hota ha ese hi is k pas hota ha to ye apne dom ko or browser k dom ko compare krrta ha..

// 2- or sirf wohi chezon ko update krta ha jo actually ma ui ma update hui hain 

// 3- but jo browser jo ha poora dom update krta ha ik bar sara remove kr k sara usko repaint krta ha or jo loading wala ghoom raha hota isi ko page reload bolte hain loading se mtlb ha dobara sa poora ka poora dom update repaint ho ra mean k web structure dobara sa tyar ho ra ha... 

// 4- but virtual dom se hm dom ko track trace kr skte hain tree structure ma or jo jo value change hui bas us ko dom se nikalen or wapis laga den

// 5- jS ek apna virtual dom structure tree banata ha us ma hi chezon ko update krte hain 

// 6-  reconcilatioon ek algorithm ha jis ko behind the scene virtual dom bolte hain ....

// 7-  reconcilation do different algorithem ha 2 trees ko compare krne k liye  

// 8-  sara code react ma likha jane wala code behind the scene virtual dom ma ja rha or phir algorithm differentiate kr rai ha or wahan se phir dom update hota ha 