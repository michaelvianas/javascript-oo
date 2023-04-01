//const privMeth = Symbol(`privateMethod`);

class MyClass {
  /*[privMeth](){
    console.log(`This is a private method`);
  }

  publMeth(){
    console.log(`This is a public method`);
    this[privMeth]();
  }*/
  constructor(){
    const privMeth = () => {
      console.log(`This is a private method`);
    };

    this.publMeth = () => {
      console.log(`This is a public method`);
      privMeth();
    };
  }
}

const metPublico = new MyClass;
metPublico.publMeth();