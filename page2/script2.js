const container  = document.querySelector(".container")
for (let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div')
    const paragraph = document.createElement('p')
    const newImage = document.createElement('img')
    newImage.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png?raw=true`
    paragraph.innerText= i
    imgContainer.append(newImage,paragraph)
    container.append(imgContainer)
    
}




    {/* for (let i = 0; i < 100; i++) {
    const newImage = firstImage.cloneNode(i)
    newImage.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png?raw=true`
    container.append(newImage)

} */}