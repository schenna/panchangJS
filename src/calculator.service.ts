import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {

    d2r: number = Math.PI / 180;
    r2d: number = 180 / Math.PI;
    zn: string[] = ["Mesha", "Vrushabha", "Mithuna", "Karkataka", "Simha", "Kanya", "Tula", "Vrushchika", "Dhanu", "Makara", "Kumbha", "Meena"];
    wd: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    range: number[] = [1, 31, 0, 0, -3000, 4000, 0, 23, 0, 59, -12, 12, 0, 59];
    naks: string[] = ["Ashwini", "Bharani", "Kruthika", "Rohini", "Mrugasira", "Aarudra", "Punarwasu", "Pushyami", "Aslesha", "Makha", "Pubha", "Uttara", "Hasta", "Chitta", "Swati", "Visakha", "Anuradha", "Jyesta", "Mula", "Purva-Shada", "Uttara-Shaada", "Sravanam", "Dhanista", "Satabhisham", "Purva-Bhadra", "Uttara-Bhadra", "Revathi"];
    tith: string[] = ["Padyami", "Vidhiya", "Thadiya", "Chavithi", "Panchami", "Shasti", "Sapthami", "Ashtami", "Navami", "Dasami", "Ekadasi", "Dvadasi", "Trayodasi", "Chaturdasi", "Punnami", "Padyami", "Vidhiya", "Thadiya", "Chaviti", "Panchami", "Shasti", "Sapthami", "Ashtami", "Navami", "Dasami", "Ekadasi", "Dvadasi", "Trayodasi", "Chaturdasi", "Amavasya"];
    kar: string[] = ["Bawa", "Balava", "Kaulava", "Taitula", "Garaja", "Vanija", "Vishti", "Sakuna", "Chatushpada", "Nagava", "Kimstughana"];
    yog: string[] = ["Vishkambha", "Prithi", "Ayushman", "Saubhagya", "Sobhana", "Atiganda", "Sukarman", "Dhrithi", "Soola", "Ganda", "Vridhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyan", "Parigha", "Siva", "Siddha", "Sadhya", "Subha", "Sukla", "Bramha", "Indra", "Vaidhruthi"];
    tipnaks: number[] = [2, 5, 6, 0, 1, 4, 3, 2, 4, 5, 5, 0, 2, 1, 3, 6, 1, 4, 4, 5, 0, 3, 3, 3, 5, 0, 1];
    Lmoon: any;
    Lsun: any;
    skor: any;
    LmoonYoga: any;
    LsunYoga: any;
    dt: any;
    ayanamsa: number = 0;
    kyear: any = 0;
    kmon: any;
    kday: any;

    corrMoon: Corr[] = [
        new Corr(0, 0, 0, 4, 13.902),
        new Corr(0, 0, 0, 2, 2369.912),
        new Corr(1, 0, 0, 4, 1.979),
        new Corr(1, 0, 0, 2, 191.953),
        new Corr(1, 0, 0, 0, 22639.500),
        new Corr(1, 0, 0, -2, -4586.465),
        new Corr(1, 0, 0, -4, -38.428),
        new Corr(1, 0, 0, -6, -0.393),
        new Corr(0, 1, 0, 4, -0.289),
        new Corr(0, 1, 0, 2, -24.420),
        new Corr(0, 1, 0, 0, -668.146),
        new Corr(0, 1, 0, -2, -165.145),
        new Corr(0, 1, 0, -4, -1.877),
        new Corr(0, 0, 0, 3, 0.403),
        new Corr(0, 0, 0, 1, -125.154),
        new Corr(2, 0, 0, 4, 0.213),
        new Corr(2, 0, 0, 2, 14.387),
        new Corr(2, 0, 0, 0, 769.016),
        new Corr(2, 0, 0, -2, -211.656),
        new Corr(2, 0, 0, -4, -30.773),
        new Corr(2, 0, 0, -6, -0.570),
        new Corr(1, 1, 0, 2, -2.921),
        new Corr(1, 1, 0, 0, -109.673),
        new Corr(1, 1, 0, -2, -205.962),
        new Corr(1, 1, 0, -4, -4.391),
        new Corr(1, -1, 0, 4, 0.283),
        new Corr(1, -1, 0, 2, 14.577),
        new Corr(1, -1, 0, 0, 147.687),
        new Corr(1, -1, 0, -2, 28.475),
        new Corr(1, -1, 0, -4, 0.636),
        new Corr(0, 2, 0, 2, -0.189),
        new Corr(0, 2, 0, 0, -7.486),
        new Corr(0, 2, 0, -2, -8.096),
        new Corr(0, 0, 2, 2, -5.741),
        new Corr(0, 0, 2, 0, -411.608),
        new Corr(0, 0, 2, -2, -55.173),
        new Corr(0, 0, 2, -4, 0.025),
        new Corr(1, 0, 0, 1, -8.466),
        new Corr(1, 0, 0, -1, 18.609),
        new Corr(1, 0, 0, -3, 3.215),
        new Corr(0, 1, 0, 1, 18.023),
        new Corr(0, 1, 0, -1, 0.560),
        new Corr(3, 0, 0, 2, 1.060),
        new Corr(3, 0, 0, 0, 36.124),
        new Corr(3, 0, 0, -2, -13.193),
        new Corr(3, 0, 0, -4, -1.187),
        new Corr(3, 0, 0, -6, -0.293),
        new Corr(2, 1, 0, 2, -0.290),
        new Corr(2, 1, 0, 0, -7.649),
        new Corr(2, 1, 0, -2, -8.627),
        new Corr(2, 1, 0, -4, -2.740),
        new Corr(2, -1, 0, 2, 1.181),
        new Corr(2, -1, 0, 0, 9.703),
        new Corr(2, -1, 0, -2, -2.494),
        new Corr(2, -1, 0, -4, 0.360),
        new Corr(1, 2, 0, 0, -1.167),
        new Corr(1, 2, 0, -2, -7.412),
        new Corr(1, 2, 0, -4, -0.311),
        new Corr(1, -2, 0, 2, 0.757),
        new Corr(1, -2, 0, 0, 2.580),
        new Corr(1, -2, 0, -2, 2.533),
        new Corr(0, 3, 0, -2, -0.344),
        new Corr(1, 0, 2, 2, -0.992),
        new Corr(1, 0, 2, 0, -45.099),
        new Corr(1, 0, 2, -2, -0.179),
        new Corr(1, 0, -2, 2, -6.382),
        new Corr(1, 0, -2, 0, 39.528),
        new Corr(1, 0, -2, -2, 9.366),
        new Corr(0, 1, 2, 0, 0.415),
        new Corr(0, 1, 2, -2, -2.152),
        new Corr(0, 1, -2, 2, -1.440),
        new Corr(0, 1, -2, -2, 0.384),
        new Corr(2, 0, 0, 1, -0.586),
        new Corr(2, 0, 0, -1, 1.750),
        new Corr(2, 0, 0, -3, 1.225),
        new Corr(1, 1, 0, 1, 1.267),
        new Corr(1, -1, 0, -1, -1.089),
        new Corr(0, 0, 2, -1, 0.584),
        new Corr(4, 0, 0, 0, 1.938),
        new Corr(4, 0, 0, -2, -0.952),
        new Corr(3, 1, 0, 0, -0.551),
        new Corr(3, 1, 0, -2, -0.482),
        new Corr(3, -1, 0, 0, 0.681),
        new Corr(2, 0, 2, 0, -3.996),
        new Corr(2, 0, 2, -2, 0.557),
        new Corr(2, 0, -2, 2, -0.459),
        new Corr(2, 0, -2, 0, -1.298),
        new Corr(2, 0, -2, -2, 0.538),
        new Corr(1, 1, -2, -2, 0.426),
        new Corr(1, -1, 2, 0, -0.304),
        new Corr(1, -1, -2, 2, -0.372),
        new Corr(0, 0, 4, 0, 0.418),
        new Corr(2, -1, 0, -1, -0.352)
    ];

    corrMoon2: Corr2[] = [
        new Corr2(0.127, 0, 0, 0, 6),
        new Corr2(-0.151, 0, 2, 0, -4),
        new Corr2(-0.085, 0, 0, 2, 4),
        new Corr2(0.150, 0, 1, 0, 3),
        new Corr2(-0.091, 2, 1, 0, -6),
        new Corr2(-0.103, 0, 3, 0, 0),
        new Corr2(-0.301, 1, 0, 2, -4),
        new Corr2(0.202, 1, 0, -2, -4),
        new Corr2(0.137, 1, 1, 0, -1),
        new Corr2(0.233, 1, 1, 0, -3),
        new Corr2(-0.122, 1, -1, 0, 1),
        new Corr2(-0.276, 1, -1, 0, -3),
        new Corr2(0.255, 0, 0, 2, 1),
        new Corr2(0.254, 0, 0, 2, -3),
        new Corr2(-0.100, 3, 1, 0, -4),
        new Corr2(-0.183, 3, -1, 0, -2),
        new Corr2(-0.297, 2, 2, 0, -2),
        new Corr2(-0.161, 2, 2, 0, -4),
        new Corr2(0.197, 2, -2, 0, 0),
        new Corr2(0.254, 2, -2, 0, -2),
        new Corr2(-0.250, 1, 3, 0, -2),
        new Corr2(-0.123, 2, 0, 2, 2),
        new Corr2(0.173, 2, 0, -2, -4),
        new Corr2(0.263, 1, 1, 2, 0),
        new Corr2(0.130, 3, 0, 0, -1),
        new Corr2(0.113, 5, 0, 0, 0),
        new Corr2(0.092, 3, 0, 2, -2)
    ];



    constructor() { }

    calculate(d: Date): Panchang {
        var n_wday, n_tithi = 1, n_naksh = 1, n_karana = 0, n_yoga;

        var day = d.getDate();
        var mon = d.getMonth() + 1;
        var year = d.getFullYear();
        var hr = d.getHours();
        hr += d.getMinutes() / 60;
        var tzone = d.getTimezoneOffset() / 60 * (-1);

        var inpmin = Math.floor(d.getMinutes());
        //if (inpmin < 10) inpmin = "0" + inpmin;


        // Julian date in local p. LT:
        var dayhr = day + hr / 24;
        var jdlt = this.mdy2julian(mon, dayhr, year);

        // day:
        n_wday = this.weekDay(jdlt);
        //this.Day.name = this.wd[n_wday];

        // julian day at the begining of the day
        var jd0 = this.mdy2julian(mon, day, year);
        var jdut = jd0 + (hr - tzone) / 24;

        var dt = this.dTime(jdut);
        var jd = jdut + dt / 24;

        //ayyanamsa
        this.ayanamsa = this.calcayan(jd);

        // length Moon
        this.Lmoon = this.moon(jd);

        // Logitudinal Sun
        this.Lsun = this.sun(jd);

        // yoga:
        var dmoonYoga = (this.LmoonYoga + this.ayanamsa - 491143.07698973856);
        var dsunYoga = (this.LsunYoga + this.ayanamsa - 36976.91240579201);
        var zyoga = dmoonYoga + dsunYoga;
        n_yoga = zyoga * 6 / 80;
        while (n_yoga < 0) n_yoga += 27;
        while (n_yoga > 27) n_yoga -= 27;
        var n3 = n_yoga;
        n_yoga = Math.floor(n_yoga);
        var s_yoga = this.yoga(jd, zyoga, tzone);

        // Nakstra
        var Lmoon0 = this.fix360(this.Lmoon + this.ayanamsa);
        n_naksh = Math.floor(Lmoon0 * 6 / 80);
        var s_naksh = this.nakshatra(jd, n_naksh, tzone);

        // tithi
        Lmoon0 = this.Lmoon;
        var Lsun0 = this.Lsun;
        if (Lmoon0 < Lsun0) Lmoon0 += 360;
        n_tithi = Math.floor((Lmoon0 - Lsun0) / 12);
        var s_tithi = this.tithi(jd, n_tithi, tzone, 12);

        // Karana
        Lmoon0 = this.Lmoon;
        Lsun0 = this.Lsun;
        if (Lmoon0 < Lsun0) Lmoon0 += 360;
        var nk = Math.floor((Lmoon0 - Lsun0) / 6);
        if (nk == 0) n_karana = 10;
        if (nk >= 57) n_karana = nk - 50;
        if (nk > 0 && nk < 57) n_karana = (nk - 1) - (Math.floor((nk - 1) / 7)) * 7;
        var s_karana = this.tithi(jd, nk, tzone, 6);

        var z = Math.floor(Math.abs(this.fix360(this.Lmoon + this.ayanamsa)) / 30);

        //this.Ayanamsa.name = this.lon2dms(this.ayanamsa);
        //this.Raasi.name = this.zn[z];
        //this.Nakshatra.name = this.naks[n_naksh];
        //this.Nakshatra.start = s_naksh.start;
        //this.Nakshatra.end = s_naksh.end;

        //this.Karna.name = this.kar[n_karana];
        //this.Karna.start = s_karana.start;
        //this.Karna.end = s_karana.end;

        //this.Yoga.name = this.yog[n_yoga];
        //this.Yoga.start = s_yoga.start;
        //this.Yoga.end = s_yoga.end;

        //this.Tithi.name = this.tith[n_tithi];
        //this.Tithi.start = s_tithi.start;
        //this.Tithi.end = s_tithi.end
        var panchang: Panchang = {
            Tithi: this.tith[n_tithi],
            Tithi_Start: s_tithi.start,
            Tithi_End: s_tithi.end,
            Vaara: this.wd[n_wday],
            Nakshatra: this.naks[n_naksh],
            Nakshatra_Start: s_naksh.start,
            Nakshatra_End: s_naksh.end,
            Yoga: this.yog[n_yoga],
            Yoga_Start: s_yoga.start,
            Yoga_End: s_yoga.end,
            Karana: this.kar[n_karana],
            Karana_Start: s_karana.start,
            Karana_End: s_karana.end
        }
        return panchang;
    }

    weekDay(jd: any) {
        // Julian date for the begin of the day
        var jd0 = Math.floor(jd) + 0.5;
        if (jd < jd0) jd0 -= 1;

        // day
        var jdn = jd0 + 1.5;
        var dn1 = Math.floor(jdn / 7) * 7;


        var wday = Math.floor(jdn - dn1);

        return wday;
    }

    dTime(jd: any) {

        var efdt = [124, 85, 62, 48, 37, 26, 16, 10, 9, 10, 11, 11, 12, 13, 15, 16, 17, 17, 13.7, 12.5, 12, 7.5, 5.7, 7.1, 7.9, 1.6, -5.4, -5.9, -2.7, 10.5, 21.2, 24, 24.3, 29.2, 33.2, 40.2, 50.5, 56.9, 65.7, 75.5];
        var s = this.calData(jd);
        var dgod = this.kyear + (this.kmon - 1) / 12 + (this.kday - 1) / 365.25;
        var t = (jd - 2378497) / 36525; // IN centuries rejection of 1800 bc
        //t = (jd - 2415020)/36525; // in cent rejection of 1900 bc
        var i1;
        var di;
        if (dgod >= 1620 && dgod < 2010) {
            i1 = Math.floor((dgod - 1620) / 10);
            di = dgod - (1620 + i1 * 10);
            this.dt = (efdt[i1] + ((efdt[i1 + 1] - efdt[i1]) * di) / 10);
        }
        else {
            if (dgod >= 2010) this.dt = 25.5 * t * t - 39;
            //if (dgod >= 2010) dt = 29.949 * t * t - 56.796;
            //if (dgod < 1620) dt = 5 + 24.349 + 72.3165 * t + 29.949 * t * t;
            if (dgod >= 948 && dgod < 1620) this.dt = 25.5 * t * t;
            if (dgod < 948) this.dt = 1361.7 + 320 * t + 44.3 * t * t;
        }
        this.dt /= 3600;
        return this.dt;
    }

    daysInMonth(m: number, y: number) {
        var g_days = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) g_days[1] = 29;
        return g_days[m];
    }

    moon(jd: any) {
        // days from 1900
        const tdays = jd - 2415020;
        const t = tdays / 36525;
        const t2 = t * t;
        const t3 = t * t * t;

        // slope travels to the equator
        const ob = 23.452294 - 0.0130125 * t - 0.00000164 * t2 + 0.000000503 * t3;
        // the average length moon
        var l = 270.4337361 + 13.176396544528099 * tdays - 5.86 * t2 / 3600 + 0.0068 * t3 / 3600;
        // the difference medium length Moon and the Sun (the averageElongation Moon):
        var d = 350.7374861110581 + 445267.1142166667 * t - t2 * 1.436111132303874e-3 + 0.0000018888889 * t3;
        // Perigee moon
        const pe = 334.329556 + 14648522.52 * t / 3600 - 37.17 * t2 / 3600 - 0.045 * t3 / 3600;
        // the average anomoly sun
        var ms = 358.4758333333334 + 35999.04974999958 * t - t2 * 1.500000059604645e-4 - t3 * 3.3333333623078e-6;
        // The average anomoloy moon
        //ml = 296.1046083333757 + 477198.8491083336*t + 0.0091916667090522*t2 + 0.0000143888893*t3;
        var ml = this.fix360(l - pe);
        // Rising length node orbit the moon:
        const om = 259.183275 - 6962911.23 * t / 3600 + 7.48 * t2 / 3600 + 0.008 * t3 / 3600;
        // the average length Moon, measured from the bottom up hub orbit:

        var f = this.fix360(l - om);
        // periodic revisions
        const r2rad = 360.0 * this.d2r;
        const tb = tdays * 1e-12; // *10^12
        const t2c = tdays * tdays * 1e-16; // *10^16
        const a1 = Math.sin(r2rad * (0.53733431 - 10104982 * tb + 191 * t2c));
        const a2 = Math.sin(r2rad * (0.71995354 - 147094228 * tb + 43 * t2c));
        const c2 = Math.cos(r2rad * (0.71995354 - 147094228 * tb + 43 * t2c));
        const a3 = Math.sin(r2rad * (0.14222222 + 1536238 * tb));
        const a4 = Math.sin(r2rad * (0.48398132 - 147269147 * tb + 43 * t2c));
        const c4 = Math.cos(r2rad * (0.48398132 - 147269147 * tb + 43 * t2c));
        const a5 = Math.sin(r2rad * (0.52453688 - 147162675 * tb + 43 * t2c));
        const a6 = Math.sin(r2rad * (0.84536324 - 11459387 * tb));
        const a7 = Math.sin(r2rad * (0.23363774 + 1232723 * tb + 191 * t2c));
        const a8 = Math.sin(r2rad * (0.58750000 + 9050118 * tb));
        const a9 = Math.sin(r2rad * (0.61043085 - 67718733 * tb));

        const dlm = 0.84 * a3 + 0.31 * a7 + 14.27 * a1 + 7.261 * a2 + 0.282 * a4 + 0.237 * a6;
        const dpm = -2.1 * a3 - 2.076 * a2 - 0.840 * a4 - 0.593 * a6;
        const dkm = 0.63 * a3 + 95.96 * a2 + 15.58 * a4 + 1.86 * a5;
        const dls = -6.4 * a3 - 0.27 * a8 - 1.89 * a6 + 0.20 * a9;
        var dgc = (-4.318 * c2 - 0.698 * c4) / 3600.0 / 360.0;
        dgc = (1.000002708 + 139.978 * dgc);

        ml = this.d2r * (ml + (dlm - dpm) / 3600.0); //Average anomoly moon
        ms = this.d2r * (ms + dls / 3600.0); //Average anomoly sun
        f = this.d2r * (f + (dlm - dkm) / 3600.0);
        d = this.d2r * (d + (dlm - dls) / 3600.0); //avg elongation moon

        var lk = 0;
        var lk1 = 0;
        var sk = 0;
        var sinp = 0;
        var nib = 0;
        var g1c = 0;
        var i1corr = 1.0 - 6.8320e-8 * tdays;
        var i2corr = dgc * dgc;

        for (var i = 0; i < 93; i++) { // outrage at length
            var arg = this.corrMoon[i].mlcor * ml + this.corrMoon[i].mscor * ms + this.corrMoon[i].fcor * f + this.corrMoon[i].dcor * d;
            var sinarg = Math.sin(arg);
            if (this.corrMoon[i].mscor != 0) {
                sinarg *= i1corr;
                if (this.corrMoon[i].mscor == 2 || this.corrMoon[i].mscor == -2) sinarg *= i1corr;
            }
            if (this.corrMoon[i].fcor != 0) sinarg *= i2corr;
            lk += this.corrMoon[i].lcor * sinarg;
        }
        for (var i = 0; i < 27; i++) { // outrage at length additional
            arg = this.corrMoon2[i].ml * ml + this.corrMoon2[i].ms * ms + this.corrMoon2[i].f * f + this.corrMoon2[i].d * d;
            sinarg = Math.sin(arg);
            lk1 += this.corrMoon2[i].l * sinarg;
        }

        // resentments of the planets
        var dlid = 0.822 * Math.sin(r2rad * (0.32480 - 0.0017125594 * tdays));
        dlid += 0.307 * Math.sin(r2rad * (0.14905 - 0.0034251187 * tdays));
        dlid += 0.348 * Math.sin(r2rad * (0.68266 - 0.0006873156 * tdays));
        dlid += 0.662 * Math.sin(r2rad * (0.65162 + 0.0365724168 * tdays));
        dlid += 0.643 * Math.sin(r2rad * (0.88098 - 0.0025069941 * tdays));
        dlid += 1.137 * Math.sin(r2rad * (0.85823 + 0.0364487270 * tdays));
        dlid += 0.436 * Math.sin(r2rad * (0.71892 + 0.0362179180 * tdays));
        dlid += 0.327 * Math.sin(r2rad * (0.97639 + 0.0001734910 * tdays));

        l = l + this.nutation(jd) + (dlm + lk + lk1 + dlid) / 3600.0;
        this.LmoonYoga = l;
        //alert("Lmoon="+l);
        l = this.fix360(l);

        // angular velocity of the moon on ecliptic (deg/day):
        var vl = 13.176397;
        vl = vl + 1.434006 * Math.cos(ml);
        vl = vl + .280135 * Math.cos(2 * d);
        vl = vl + .251632 * Math.cos(2 * d - ml);
        vl = vl + .09742 * Math.cos(2 * ml);
        vl = vl - .052799 * Math.cos(2 * f);
        vl = vl + .034848 * Math.cos(2 * d + ml);
        vl = vl + .018732 * Math.cos(2 * d - ms);
        vl = vl + .010316 * Math.cos(2 * d - ms - ml);
        vl = vl + .008649 * Math.cos(ms - ml);
        vl = vl - .008642 * Math.cos(2 * f + ml);
        vl = vl - .007471 * Math.cos(ms + ml);
        vl = vl - .007387 * Math.cos(d);
        vl = vl + .006864 * Math.cos(3 * ml);
        vl = vl + .00665 * Math.cos(4 * d - ml);
        vl = vl + .003523 * Math.cos(2 * d + 2 * ml);
        vl = vl + .003377 * Math.cos(4 * d - 2 * ml);
        vl = vl + .003287 * Math.cos(4 * d);
        vl = vl - .003193 * Math.cos(ms);
        vl = vl - .003003 * Math.cos(2 * d + ms);
        vl = vl + .002577 * Math.cos(ml - ms + 2 * d);
        vl = vl - .002567 * Math.cos(2 * f - ml);
        vl = vl - .001794 * Math.cos(2 * d - 2 * ml);
        vl = vl - .001716 * Math.cos(ml - 2 * f - 2 * d);
        vl = vl - .001698 * Math.cos(2 * d + ms - ml);
        vl = vl - .001415 * Math.cos(2 * d + 2 * f);
        vl = vl + .001183 * Math.cos(2 * ml - ms);
        vl = vl + .00115 * Math.cos(d + ms);
        vl = vl - .001035 * Math.cos(d + ml);
        vl = vl - .001019 * Math.cos(2 * f + 2 * ml);
        vl = vl - .001006 * Math.cos(ms + 2 * ml);

        this.skor = vl;
        //l += ay;
        //if(l < 0.0)l += 360.0;
        return l;
    }

    sun(jd: any) {
        // days frm 1900:
        var tdays = jd - 2415020;

        var t = tdays / 36525;
        var t2 = t * t;
        var t3 = t * t * t;

        // the avg len sun

        var ls = 279.696678 + 0.9856473354 * tdays + 1.089 * t2 / 3600;
        // perigee sun
        var pes = 101.220833 + 6189.03 * t / 3600 + 1.63 * t2 / 3600 + 0.012 * t3 / 3600;
        // avg anomoly sun

        var ms = this.fix360(ls - pes + 180);
        var g = ms + (0.266 * Math.sin((31.8 + 119.0 * t) * this.d2r) + 6.40 * Math.sin((231.19 + 20.2 * t) * this.d2r) + (1.882 - 0.016 * t) * Math.sin((57.24 + 150.27 * t) * this.d2r)) / 3600.0;
        // Rising sun node len
        var oms = 259.18 - 1934.142 * t;
        // eccentricity orbit sun
        var ex = 0.01675104 - 0.0000418 * t - 0.000000126 * t2;
        // avg length moon
        var l = 270.4337361 + 13.176396544528099 * tdays - 5.86 * t2 / 3600 + 0.0068 * t3 / 3600;
        // avg anomaly moon
        var ml = 296.1046083333757 + 477198.8491083336 * t + 0.0091916667090522 * t2 + 0.0000143888893 * t3;
        // avg len earth
        var le = 99.696678 + 0.9856473354 * tdays + 1.089 * t2 / 3600;

        var om = 259.183275 - 6962911.23 * t / 3600 + 7.48 * t2 / 3600 + 0.008 * t3 / 3600;

        // eccentric anomoloy calculation iterative method
        var u = this.kepler(g, ex, 0.0000003);

        var b = Math.sqrt((1 + ex) / (1 - ex));
        var truanom;
        if (Math.abs(Math.PI - u) < 1.0e-10) truanom = u;
        else truanom = 2.0 * Math.atan(b * Math.tan(u / 2));
        truanom = this.fix360(truanom * this.r2d);

        //corrections for cal of longitude and radius vector
        var u1 = (153.23 + 22518.7541 * t) * this.d2r;
        var u2 = (216.57 + 45037.5082 * t) * this.d2r;
        var u3 = (312.69 + 32964.3577 * t) * this.d2r;
        var u4 = (350.74 + 445267.1142 * t - 0.00144 * t2) * this.d2r;
        var u6 = (353.4 + 65928.71550000001 * t) * this.d2r;
        var u5 = (315.6 + 893.3 * t) * this.d2r;

        var dl = 0.00134 * Math.cos(u1);
        dl += 0.00154 * Math.cos(u2);
        dl += 0.002 * Math.cos(u3);
        dl += 0.00179 * Math.sin(u4);
        dl += 0.202 * Math.sin(u5) / 3600;

        var dr = 0.00000543 * Math.sin(u1);
        dr += 0.00001575 * Math.sin(u2);
        dr += 0.00001627 * Math.sin(u3);
        dr += 0.00003076 * Math.cos(u4);
        dr += 9.26999999e-06 * Math.sin(u6);

        // true len of sun (deg)
        var il = ls + dl + truanom - ms;

        // corrections to abberations links
        var r1 = 1.0000002 * (1 - ex * ex) / (1 + ex * Math.cos(truanom * this.d2r));
        var rs = r1 + dr; // radius vector
        var ab = (20.496 * (1 - ex * ex) / rs) / 3600;
        ls = il + this.nutation(jd) - ab; // app len sun
        this.LsunYoga = ls;

        ls = this.fix360(ls);

        return ls;
    }

    tithi(jd: any, n1: any, tzone: any, len: any) {
        var s_t: S_T = {
            start: new Date(),
            end: new Date()
        };
        var flag;
        var jdt = jd;
        var knv = Math.floor(((jd - 2415020) / 365.25) * 12.3685);

        for (var itit = n1; itit < (n1 + 2); ++itit) {
            var aspect = len * itit; // sun n moon in the early tithi
            flag = 0;
            if (aspect == 0) { jdt = this.novolun(jd, knv); flag = 1; }
            if (aspect == 360) { jdt = this.novolun(jd, (knv + 1)); flag = 1; }
            while (flag < 1) {
                var Lsun0 = this.sun(jdt);
                var Lmoon0 = this.moon(jdt);
                var a = this.fix360(Lsun0 + aspect); // pt should be where luna
                var asp1 = a - Lmoon0; // assymptots of the moon to ur point
                if (asp1 > 180) asp1 -= 360;
                if (asp1 < -180) asp1 += 360;
                flag = 1;

                if (Math.abs(asp1) > 0.001) { jdt += (asp1 / (this.skor - 1)); flag = 0; }
            }
            if (itit == n1) s_t.start = this.calData(jdt + (tzone - this.dt) / 24);
            if (itit == (n1 + 1)) s_t.end = this.calData(jdt + (tzone - this.dt) / 24);
        }
        return s_t;
    }

    nakshatra(jd: any, n_naksh: any, tzone: any) {
        var s_t: S_T = {
            start: new Date(),
            end: new Date()
        };
        var jdt = jd;
        for (var inak = n_naksh; inak < (n_naksh + 2); ++inak) {
            var n1 = this.fix360(inak * 80 / 6); // co-ordinate start of nakshatra
            var flag = 0;
            while (flag < 1) {
                var Lmoon0 = this.fix360(this.moon(jdt) + this.ayanamsa);
                var asp1 = n1 - Lmoon0; // distance frm moon before nakshatra(degree)
                if (asp1 > 180) asp1 -= 360;
                if (asp1 < -180) asp1 += 360;
                flag = 1;
                if (Math.abs(asp1) > 0.001) { jdt += (asp1 / this.skor); flag = 0; }
            }
            if (inak == n_naksh) s_t.start = this.calData(jdt + (tzone - this.dt) / 24);
            if (inak == (n_naksh + 1)) s_t.end = this.calData(jdt + (tzone - this.dt) / 24);
        }
        return s_t;
    }

    yoga(jd: any, zyoga: any, tzone: any) {
        var s_t: S_T = {
            start: new Date(),
            end: new Date()
        };
        var flag;
        var jdt = jd;
        var z = zyoga;
        var nn_yoga = new Array(2);
        nn_yoga[0] = Math.floor(z * 6 / 80) * 80 / 6;
        nn_yoga[1] = (Math.floor(z * 6 / 80) + 1) * 80 / 6;
        for (var iyog = 0; iyog < 2; ++iyog) {
            flag = 0;
            while (flag < 1) {
                var Lsun0 = this.sun(jdt);
                var Lmoon0 = this.moon(jdt);
                var dmoonYoga = (this.LmoonYoga + this.ayanamsa - 491143.07698973856);
                var dsunYoga = (this.LsunYoga + this.ayanamsa - 36976.91240579201);
                //alert(LmoonYoga+"\r"+LsunYoga+"\r"+ayanamsa);
                z = dmoonYoga + dsunYoga;
                var asp1 = nn_yoga[iyog] - z;
                flag = 1;
                if (Math.abs(asp1) > 0.001) { jdt += (asp1 / (this.skor + 1.0145616633)); flag = 0; }
                //if (Math.abs(asp1) > 0.001) {jdt += (asp1 / skor) + (58.13 * Math.sin(asp1*d2r)); flag = 0;}
            }
            if (iyog == 0) s_t.start = this.calData(jdt + (tzone - this.dt) / 24);
            if (iyog == 1) s_t.end = this.calData(jdt + (tzone - this.dt) / 24);
        }
        return s_t;
    }

    novolun(jd: any, knv: any) {

        var t = (jd - 2415020) / 36525;
        var t2 = t * t;
        var t3 = t * t * t;

        var jdnv = 2415020.75933 + 29.53058868 * knv + 0.0001178 * t2 - 0.000000155 * t3;
        jdnv += 0.00033 * Math.sin((166.56 + 132.87 * t - 0.009173 * t2) * this.d2r);
        var m = 359.2242 + 29.10535608 * knv - 0.0000333 * t2 - 0.00000347 * t3;
        var ml = 306.0253 + 385.81691806 * knv + 0.0107306 * t2 + 0.00001236 * t3;
        var f = 21.2964 + 390.67050646 * knv - 0.0016528 * t2 - 0.00000239 * t3;
        m *= this.d2r;
        ml *= this.d2r;
        f *= this.d2r;

        var djd = (0.1734 - 0.000393 * t) * Math.sin(m);
        djd += 0.0021 * Math.sin(2 * m);
        djd -= 0.4068 * Math.sin(ml);
        djd += 0.0161 * Math.sin(2 * ml);
        djd -= 0.0004 * Math.sin(3 * ml);
        djd += 0.0104 * Math.sin(2 * f);
        djd -= 0.0051 * Math.sin(m + ml);
        djd -= 0.0074 * Math.sin(m - ml);
        djd += 0.0004 * Math.sin(2 * f + m);
        djd -= 0.0004 * Math.sin(2 * f - m);
        djd -= 0.0006 * Math.sin(2 * f + ml);
        djd += 0.001 * Math.sin(2 * f - ml);
        djd += 0.0005 * Math.sin(m + 2 * ml);

        jdnv += djd;
        return jdnv;
    }

    calData(jd: any) {
        var z1 = jd + 0.5;
        var z2 = Math.floor(z1);
        var f = z1 - z2;
        var a;
        var alf;
        if (z2 < 2299161) a = z2;
        else {
            alf = Math.floor((z2 - 1867216.25) / 36524.25);
            a = z2 + 1 + alf - Math.floor(alf / 4);
        }

        var b = a + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var e = Math.floor((b - d) / 30.6001);

        var days = b - d - Math.floor(30.6001 * e) + f;
        this.kday = Math.floor(days);
        this.kmon;
        if (e < 13.5) this.kmon = e - 1;
        else this.kmon = e - 13;

        if (this.kmon > 2.5) this.kyear = c - 4716;
        if (this.kmon < 2.5) this.kyear = c - 4715;

        var hh1 = (days - this.kday) * 24;
        var khr = Math.floor(hh1);
        var kmin = hh1 - khr;
        var ksek = kmin * 60;
        var kmin = Math.floor(ksek);
        ksek = Math.floor((ksek - kmin) * 60);
        var s = new Date(this.kyear, this.kmon - 1, this.kday, khr, kmin, ksek, 0);
        return s;
    }

    lon2dms(x: any) {
        var d, m, s;
        x = Math.abs(x);
        d = Math.floor(x);
        var ss0 = Math.round((x - d) * 3600);
        m = Math.floor(ss0 / 60);
        s = (ss0 % 60) % 60;
        var str = d + " " + m + "'" + s + "\"";
        return str;
    }

    lon2dmsz(x: any) {
        var d, m, s;
        x = Math.abs(x);
        var z = Math.floor(x / 30);
        d = Math.floor(x);
        var ss0 = Math.round((x - d) * 3600);
        m = Math.floor(ss0 / 60);
        s = (ss0 % 60) % 60;
        d %= 30;
        var str = d + " " + m + "'" + s + "\" ";
        return str;
    }

    calcayan(jd: any) {
        var t = (jd - 2415020) / 36525;
        // avg node len moon
        var om = 259.183275 - 1934.142008333206 * t + 0.0020777778 * t * t + 0.0000022222222 * t * t * t;
        // avg len sun
        var ls = 279.696678 + 36000.76892 * t + 0.0003025 * t * t;
        var aya = 17.23 * Math.sin(this.d2r * om)
            + 1.27 * Math.sin(this.d2r * ls * 2) - (5025.64 + 1.11 * t) * t;
        aya = (aya - 80861.27) / 3600.0; // 84038.27 = Fagan-Bradley, 80861.27 = Lahiri

        return aya;
    }

    mdy2julian(m: any, d: any, y: any) {
        var im = 12 * (y + 4800) + m - 3;
        var j = (2 * (im - Math.floor(im / 12) * 12) + 7 + 365 * im) / 12;
        j = Math.floor(j) + d + Math.floor(im / 48) - 32083;
        if (j > 2299171) j += Math.floor(im / 4800) - Math.floor(im / 1200) + 38;
        j -= 0.5;
        return j;
    }

    kepler(m: any, ex: any, err: any) {
        //val u0, delta;

        m *= this.d2r;
        var u0 = m;
        err *= this.d2r;
        var delta = 1;
        while (Math.abs(delta) >= err) {
            delta = (m + ex * Math.sin(u0) - u0) / (1 - ex * Math.cos(u0));
            u0 += delta;
        }
        return u0;
    }

    fix360(v: any) {
        while (v < 0.0) v += 360.0;
        while (v > 360.0) v -= 360.0;
        return v;
    }

    nutation(jd: any) {

        var t = (jd - 2415020) / 36525;
        var t2 = t * t;

        // avg len sun
        var ls = 279.6967 + 36000.7689 * t + 0.000303 * t2;
        // avg len moon
        var l = 270.4341639 + 481267.8831417 * t - 0.0011333333 * t2;
        // avg anomaly sun
        var ms = 358.4758333333334 + 35999.04974999958 * t - t2 * 1.500000059604645e-4;
        // avg anomaly moon
        var ml = 296.1046083333757 + 477198.8491083336 * t + 0.0091916667090522 * t2;
        // the diff medium len of moon and sun (avg elongation moon)
        var d = 350.7374861110581 + 445267.1142166667 * t - t2 * 1.436111132303874e-3;

        var om = 259.1832750002543 - 1934.142008333206 * t + .0020777778 * t2;
        ls *= this.d2r;
        l *= this.d2r;
        ms *= this.d2r;
        ml *= this.d2r;
        d *= this.d2r;
        om *= this.d2r;
        var d2 = d * d;
        var l2 = l * l;
        var ls2 = ls * ls;

        var nut = (-17.2327 - 0.01737 * t) * Math.sin(om);
        nut += 0.2088 * Math.sin(2.0 * om);
        nut += 0.0675 * Math.sin(ml);
        nut -= 0.0149 * Math.sin(ml - d2);
        nut -= 0.0342 * Math.sin(l2 - om);
        nut += 0.0114 * Math.sin(l2 - ml);
        nut -= 0.2037 * Math.sin(l2);
        nut -= 0.0261 * Math.sin(l2 + ml);
        nut += 0.0124 * Math.sin(ls2 - om);
        nut += 0.0214 * Math.sin(ls2 - ms);
        nut -= 1.2729 * Math.sin(ls2);
        nut -= 0.0497 * Math.sin(ls2 + ms);
        nut += 0.1261 * Math.sin(ms);
        nut = nut / 3600.0;
        return nut;
    }
}

export class Corr {
    mlcor: any;
    mscor: any;
    fcor: any;
    dcor: any;
    lcor: any;
    constructor(mlcor: any, mscor: any, fcor: any, dcor: any, lcor: any) {
        this.mlcor = mlcor;
        this.mscor = mscor;
        this.fcor = fcor;
        this.dcor = dcor;
        this.lcor = lcor;
    }
}

export class Corr2 {
    l: any;
    ml: any;
    ms: any;
    f: any;
    d: any;
    constructor(l: any, ml: any, ms: any, f: any, d: any) {
        this.l = l;
        this.ml = ml;
        this.ms = ms;
        this.f = f;
        this.d = d;
    }
}

export class S_T {
    start: any;
    end: any;
}

export class Panchang {
    Tithi: any;
    Tithi_Start: any;
    Tithi_End: any;
    Vaara: any;
    Nakshatra: any;
    Nakshatra_Start: any;
    Nakshatra_End: any;
    Yoga: any;
    Yoga_Start: any;
    Yoga_End: any;
    Karana: any;
    Karana_Start: any;
    Karana_End: any;
}
