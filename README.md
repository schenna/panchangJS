#[panchangJS](https://github.com/schenna/panchangJS)

## Description
Javascript library for calculating Panchang (Hindu Calendar).
PanchangJS calculates the following components of the Panchang.
* Day
* Tithi
* Nakshatra
* Karna
* Yoga
* Raasi
* Ayanamsa

## Usage
This JS library expects a date object at initialization and polpulates the JSON.

Usage: 
```chef
var t = new Date();
panchang.calculate(t);
```
Output JSON:
```chef
{ Day: { name: 'Wednessday' },
  Tithi: 
   { name: 'Thadiya',
     start: Wed May 20 2015 06:25:45 GMT+0530 (IST),
     end: Thu May 21 2015 05:39:48 GMT+0530 (IST) },
  Nakshatra: 
   { name: 'Mrugasira',
     start: Tue May 19 2015 21:02:59 GMT+0530 (IST),
     end: Wed May 20 2015 20:45:22 GMT+0530 (IST) },
  Karna: 
   { name: 'Taitula',
     start: Wed May 20 2015 06:25:45 GMT+0530 (IST),
     end: Wed May 20 2015 17:57:42 GMT+0530 (IST) },
  Yoga: 
   { name: 'Dhrithi',
     start: Wed May 20 2015 06:27:54 GMT+0530 (IST),
     end: Thu May 21 2015 04:47:41 GMT+0530 (IST) },
  Ayanamsa: { name: '24 4\'22"' },
  Raasi: { name: 'Mithuna' },
  version: '0.2'
}
```
Check the sample app available with this repository for more details.

## Working Implementations
A working implementation of the code base can be found at [here](http://alochanaasamhita3.blogspot.com/p/panchang-calculator.html)

## Authors
* Srinivas Chenna
