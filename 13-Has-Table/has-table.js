class HashTable {
  constructor() {
    this.numBackets = 35;
    this.buckets = [];
  }

  hash(key) {
    // do something...
    let result = 0;
    for(let i = 0; i < key.length; i++){
      result += key.charCodeAt([i]);
    }
    return result % this.numBackets;
  }

  set(key, value) {
    // do something...
    let hashFunction = this.hash(key); // me da el numero de numbucket
    if(this.buckets[hashFunction] === undefined) { // Si el numbucket esta vacio, crea el objeto
      this.buckets[hashFunction] =  {};
      this.buckets[hashFunction][key] = value; // y luego lo llena al key con el value
    } else {
      this.buckets[hashFunction][key] = value; //si ya esta el valor, lo modifica******************
    }
  }

  get(key) {
    // Este metodo nos devuelve el value dentro de cada objeto de buckets.
    let hashFunction = this.hash(key); // me da el numero de numbucket
    if(this.buckets[hashFunction] === undefined) return undefined;
    if(this.buckets[hashFunction]) return this.buckets[hashFunction][key];
  }

  hasKey(key) {
    // Este metodo devuelve true o false si la key indicada se encuentra en nuestra hash table.
    let hashFunction = this.hash(key); // me da el numero de numbucket
   return this.buckets[hashFunction].hasOwnProperty(key);
  }

  key() {
    // Nos permite obtener todas las key dentro de nuestra hash table
    let result = [];
    for(let i = 0; i < this.buckets.length; i++){
      if(this.buckets[i] !== undefined) result.push(this.buckets[i].value)
    }
    return result;
  }
  

  value() {
    // Nos permite obtener todas los values dentro de nuestra hash table
    let result = [];
    for(let i = 0; i < this.buckets.length; i++){
      if(this.buckets[i] !== undefined) result.push(this.buckets[i].value)
    }
    return result;
  }
}
