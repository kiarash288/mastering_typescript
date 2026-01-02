// set and get in claases 

class BankAccount {
  private _balance: number = 0;
  private _income: number = 0;

  set incom(amount : number) {
    if (amount <= 0) {
      throw new Error('Invalid income.');
    }
    this._income = amount;

    get income() {
      return `$${this._income}`;
    }
  }

  set number(amount: number) {
    if (amount <= 0) {
      throw new Error('Invalid balance.');
    }
    this._balance = amount;
  }
  get number() {
    return `$${this._balance}`;
  }
}

// static 

class Car {
  // این یک ویژگی استاتیک است (متعلق به کلِ کارخانه)
  static totalCarsProduced = 0; 

  // این یک ویژگی معمولی است (متعلق به هر ماشین)
  public color: string;

  constructor(color: string) {
    this.color = color;
    // هر بار که یک ماشینِ جدید (new) ساخته می‌شود، 
    // به آمارِ کلِ کارخانه (Car) یکی اضافه می‌کنیم.
    Car.totalCarsProduced++; 
  }
}

const car1 = new Car('Red');
const car2 = new Car('Blue');

// برای دیدن رنگ، باید از خودِ ماشین بپرسی:
console.log(car1.color); // "Red"

// اما برای دیدنِ آمار کل، نباید از ماشین بپرسی! باید از خودِ کلاس (Car) بپرسی:
console.log(Car.totalCarsProduced); // 2

// اگر بنویسی car1.totalCarsProduced، تایپ‌اسکریپت خطا می‌دهد!

// Abstract 

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI element
  }
}

abstract class Student {
  constructor(public name:string, public age: number , public id: number, public major: string){}

  information() {
     console.log(`${this.name} with age of ${this.age} and id of ${this.id} and major of ${this.major}`)
  }
}
class Max extends Student {
  constructor(
    name:string = "Max",
    age:number = 20,
    id:number = 123456,
    major:string = "Computer Science",

  ) {
    super(name, age, id, major);
  }

  information() {
    console.log(`${this.name} with age of ${this.age} and id of ${this.id} and major of ${this.major} and i am a max`)
  }
}



// let uiElement = new UIElement();

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: 'left' | 'right') {
    super(identifier);
  }

  // ...
}


interface GPSConnectable {
  coordinates: string;
  connectToSatellite(): void;
}

abstract class Tool {
  static totalToolsCreated = 0; // آمار کلِ ابزارهای ساخته شده در کارخانه
  protected _batteryLevel: number = 100; // دسترسی فرزندان مجاز، غریبه‌ها نه

  constructor(public serialNumber: string) {
    Tool.totalToolsCreated++; // دسترسی به ویژگی استاتیک از طریق نام کلاس
  }

  // گتر برای خواندن سطح باتری به صورت زیبا
  get batteryStatus() {
    return `سطح باتری: ${this._batteryLevel}%`;
  }

  // هر وسیله‌ای به روش خودش روشن می‌شود، پس این را انتزاعی می‌گذاریم
  abstract turnOn(): void;
}


class SurveyCamera extends Tool implements GPSConnectable {
  coordinates: string = "0.0, 0.0";

  constructor(serial: string, public lensType: string) {
    // ۱. ارسال سریال به کانتراکتورِ پدر
    super(serial); 
  }

  // ۲. متد پدر (turnOn) را اینجا کامل می‌کنیم
  turnOn() {
    console.log("دوربین با لنز " + this.lensType + " روشن شد.");
  }

  // ۳. متد اینترفیس را پیاده می‌کنیم
  connectToSatellite() {
    console.log("در حال اتصال به ماهواره...");
    this.coordinates = "35.6, 51.3";
  }

  checkParentBattery() {
    // به _batteryLevel دسترسی داریم چون در پدر protected بود
    console.log("دسترسی از فرزند: " + this._batteryLevel); 
  }
}

// ۱. نمی‌توانیم Tool را مستقیم بسازیم چون abstract است
// const t = new Tool("123"); // ERROR!

// ۲. ساخت یک دوربین واقعی
const myCam = new SurveyCamera("SN-2025", "WideAngle");

// ۳. استفاده از متدهای ارث‌بری شده و پیاده‌سازی شده
myCam.turnOn(); // خروجی: دوربین با لنز WideAngle روشن شد.
myCam.connectToSatellite();

// ۴. استفاده از Getter (بدون پرانتز مثل متغیر صدا می‌زنیم)
console.log(myCam.batteryStatus); // خروجی: سطح باتری: 100%

// ۵. استفاده از Static (مستقیم از نام کلاسِ Tool)
console.log("تعداد کل ابزارها: " + Tool.totalToolsCreated); // خروجی: 1




abstract class Vehicle {
  static totalCount = 0; // آمار کل خودروهای ساخته شده
  protected _engineStarted: boolean = false; // فقط فرزندان به این دسترسی دارند

  constructor(public model: string, public serialNumber: string) {
    // هر خودرویی که ساخته شود، این کنتور بالا می‌رود
    Vehicle.totalCount++; //
  }

  // یک متد معمولی که به فرزندان ارث می‌رسد
  get status() {
    return this._engineStarted ? 'روشن' : 'خاموش'; //
  }

  // یک متد اجباری که هر خودرو باید خودش بنویسد
  abstract drive(): void; //
}


class ElectricCar extends Vehicle {
  constructor(
    model: string, 
    serial: string, 
    public batteryCapacity: number // ویژگی مخصوصِ خودِ فرزند
  ) {
    // ۱. ارسال مقادیر مورد نیازِ پدر به کانتراکتورِ او
    super(model, serial); 
    
    // حالا پدر ساخته شده و ما می‌توانیم کارهای خودمان را انجام دهیم
  }

  // ۲. پیاده‌سازی متد اجباری پدر
  drive() {
    this._engineStarted = true; // دسترسی به ویژگی protected پدر
    console.log(`${this.model} با قدرت برق در حال حرکت است...`);
  }

  showInfo() {
    // استفاده از متد ارث‌بری شده status بدون اینکه دوباره آن را بنویسیم
    console.log(`وضعیت موتور: ${this.status}`); 
  }
}