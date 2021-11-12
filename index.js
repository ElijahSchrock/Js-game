
function newImage (name, source, x, y) {
    name = document.createElement('img')
    name.src = source
    name.style.position = 'fixed'
    name.style.left = x 
    name.style.bottom = y
    document.body.append(name)
    return name;
} 

newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px');
newImage('pineTree', 'assets/pine-tree.png', '450px', '200px')
newImage('tree', 'assets/tree.png', '200px', '300px')
newImage('pillar', 'assets/pillar.png', '300px', '100px')
newImage('crate', 'assets/crate.png', '150px', '200px')
newImage('well', 'assets/well.png ', '500px', '425px')


function newItem(name, source, x, y) {
    name = newImage(name, source, x, y);

    name.addEventListener('dblclick', function(){
        name.remove()
    })
}

newItem('sword', 'assets/sword.png', '500px', '405px')
newItem('sheild', 'assets/sheild.png', '175px', '185px')
newItem('staff', 'assets/staff.png', '600px', '100px')
