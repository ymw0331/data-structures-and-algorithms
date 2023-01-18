class Cookie
{
  constructor ( color )
  {
    this.color = color;
  }
  getColor(){
    return this.color
  }
  setColor()
}

let cookieOne = new Cookie( 'green' ); //instance of Cookie, create it by calling new constructor of cooke


let cookieTwo = new Cookie( 'blue' );