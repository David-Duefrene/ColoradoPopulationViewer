import React, { useState, useEffect } from "react";
import { j as jsxs, a as jsx } from "./chunk-2839ff2c.js";
import * as d3 from "d3";
import "react/jsx-runtime";
const Pitkin = [
  {
    year: 2001,
    totalPopulation: 16183
  },
  {
    year: 1994,
    totalPopulation: 14539
  },
  {
    year: 2038,
    totalPopulation: 18168
  },
  {
    year: 2012,
    totalPopulation: 17200
  },
  {
    year: 2034,
    totalPopulation: 17970
  },
  {
    year: 2017,
    totalPopulation: 17657
  },
  {
    year: 2026,
    totalPopulation: 17519
  },
  {
    year: 1997,
    totalPopulation: 14796
  },
  {
    year: 2005,
    totalPopulation: 16134
  },
  {
    year: 2029,
    totalPopulation: 17669
  },
  {
    year: 2008,
    totalPopulation: 16674
  },
  {
    year: 2024,
    totalPopulation: 17386
  },
  {
    year: 1993,
    totalPopulation: 14060
  },
  {
    year: 2016,
    totalPopulation: 17689
  },
  {
    year: 1996,
    totalPopulation: 14548
  },
  {
    year: 2e3,
    totalPopulation: 15763
  },
  {
    year: 2013,
    totalPopulation: 17318
  },
  {
    year: 2021,
    totalPopulation: 17308
  },
  {
    year: 1992,
    totalPopulation: 13365
  },
  {
    year: 2023,
    totalPopulation: 17353
  },
  {
    year: 2032,
    totalPopulation: 17831
  },
  {
    year: 2039,
    totalPopulation: 18216
  },
  {
    year: 2003,
    totalPopulation: 16275
  },
  {
    year: 2041,
    totalPopulation: 18305
  },
  {
    year: 2002,
    totalPopulation: 16102
  },
  {
    year: 2033,
    totalPopulation: 17900
  },
  {
    year: 2042,
    totalPopulation: 18349
  },
  {
    year: 1999,
    totalPopulation: 14827
  },
  {
    year: 2048,
    totalPopulation: 18672
  },
  {
    year: 2009,
    totalPopulation: 17056
  },
  {
    year: 2018,
    totalPopulation: 17645
  },
  {
    year: 2004,
    totalPopulation: 16077
  },
  {
    year: 2030,
    totalPopulation: 17721
  },
  {
    year: 2007,
    totalPopulation: 16235
  },
  {
    year: 2011,
    totalPopulation: 17122
  },
  {
    year: 2027,
    totalPopulation: 17572
  },
  {
    year: 2022,
    totalPopulation: 17318
  },
  {
    year: 2006,
    totalPopulation: 16087
  },
  {
    year: 2014,
    totalPopulation: 17517
  },
  {
    year: 2044,
    totalPopulation: 18447
  },
  {
    year: 2046,
    totalPopulation: 18560
  },
  {
    year: 2036,
    totalPopulation: 18087
  },
  {
    year: 2037,
    totalPopulation: 18132
  },
  {
    year: 2010,
    totalPopulation: 17156
  },
  {
    year: 2025,
    totalPopulation: 17438
  },
  {
    year: 2040,
    totalPopulation: 18267
  },
  {
    year: 2019,
    totalPopulation: 17414
  },
  {
    year: 2031,
    totalPopulation: 17772
  },
  {
    year: 1995,
    totalPopulation: 14652
  },
  {
    year: 1998,
    totalPopulation: 14777
  },
  {
    year: 2047,
    totalPopulation: 18609
  },
  {
    year: 2049,
    totalPopulation: 18726
  },
  {
    year: 2043,
    totalPopulation: 18399
  },
  {
    year: 1990,
    totalPopulation: 12661
  },
  {
    year: 2050,
    totalPopulation: 18787
  },
  {
    year: 2015,
    totalPopulation: 17702
  },
  {
    year: 2035,
    totalPopulation: 18027
  },
  {
    year: 2028,
    totalPopulation: 17624
  },
  {
    year: 2045,
    totalPopulation: 18502
  },
  {
    year: 1991,
    totalPopulation: 12984
  },
  {
    year: 2020,
    totalPopulation: 17363
  }
];
const Teller = [
  {
    year: 2028,
    totalPopulation: 26690
  },
  {
    year: 2021,
    totalPopulation: 24879
  },
  {
    year: 2025,
    totalPopulation: 26041
  },
  {
    year: 2012,
    totalPopulation: 23270
  },
  {
    year: 2016,
    totalPopulation: 23606
  },
  {
    year: 2006,
    totalPopulation: 22791
  },
  {
    year: 2031,
    totalPopulation: 27099
  },
  {
    year: 2004,
    totalPopulation: 22215
  },
  {
    year: 2010,
    totalPopulation: 23441
  },
  {
    year: 1995,
    totalPopulation: 16979
  },
  {
    year: 2050,
    totalPopulation: 29192
  },
  {
    year: 2038,
    totalPopulation: 27923
  },
  {
    year: 2037,
    totalPopulation: 27825
  },
  {
    year: 2015,
    totalPopulation: 23008
  },
  {
    year: 2039,
    totalPopulation: 28023
  },
  {
    year: 2022,
    totalPopulation: 25169
  },
  {
    year: 2040,
    totalPopulation: 28123
  },
  {
    year: 2014,
    totalPopulation: 23117
  },
  {
    year: 2009,
    totalPopulation: 23201
  },
  {
    year: 2011,
    totalPopulation: 23264
  },
  {
    year: 2008,
    totalPopulation: 23103
  },
  {
    year: 2030,
    totalPopulation: 26965
  },
  {
    year: 2019,
    totalPopulation: 24680
  },
  {
    year: 2020,
    totalPopulation: 24777
  },
  {
    year: 1997,
    totalPopulation: 19069
  },
  {
    year: 2032,
    totalPopulation: 27227
  },
  {
    year: 1996,
    totalPopulation: 18134
  },
  {
    year: 2007,
    totalPopulation: 23167
  },
  {
    year: 2013,
    totalPopulation: 23107
  },
  {
    year: 2047,
    totalPopulation: 28854
  },
  {
    year: 2027,
    totalPopulation: 26531
  },
  {
    year: 2049,
    totalPopulation: 29082
  },
  {
    year: 1994,
    totalPopulation: 15786
  },
  {
    year: 2035,
    totalPopulation: 27598
  },
  {
    year: 2002,
    totalPopulation: 21988
  },
  {
    year: 2026,
    totalPopulation: 26263
  },
  {
    year: 1998,
    totalPopulation: 19671
  },
  {
    year: 2017,
    totalPopulation: 24156
  },
  {
    year: 2034,
    totalPopulation: 27484
  },
  {
    year: 1993,
    totalPopulation: 14734
  },
  {
    year: 2043,
    totalPopulation: 28426
  },
  {
    year: 2e3,
    totalPopulation: 21067
  },
  {
    year: 2042,
    totalPopulation: 28328
  },
  {
    year: 2029,
    totalPopulation: 26833
  },
  {
    year: 2048,
    totalPopulation: 28962
  },
  {
    year: 1990,
    totalPopulation: 12471
  },
  {
    year: 2045,
    totalPopulation: 28641
  },
  {
    year: 1992,
    totalPopulation: 13673
  },
  {
    year: 2044,
    totalPopulation: 28533
  },
  {
    year: 2024,
    totalPopulation: 25749
  },
  {
    year: 2005,
    totalPopulation: 22507
  },
  {
    year: 2046,
    totalPopulation: 28734
  },
  {
    year: 2003,
    totalPopulation: 22220
  },
  {
    year: 2036,
    totalPopulation: 27721
  },
  {
    year: 1999,
    totalPopulation: 20184
  },
  {
    year: 2018,
    totalPopulation: 24522
  },
  {
    year: 2023,
    totalPopulation: 25456
  },
  {
    year: 2041,
    totalPopulation: 28228
  },
  {
    year: 1991,
    totalPopulation: 12717
  },
  {
    year: 2001,
    totalPopulation: 21737
  },
  {
    year: 2033,
    totalPopulation: 27359
  }
];
const Weld = [
  {
    year: 2042,
    totalPopulation: 549518
  },
  {
    year: 2049,
    totalPopulation: 611246
  },
  {
    year: 2026,
    totalPopulation: 384736
  },
  {
    year: 2018,
    totalPopulation: 313213
  },
  {
    year: 2019,
    totalPopulation: 322334
  },
  {
    year: 2004,
    totalPopulation: 214065
  },
  {
    year: 2050,
    totalPopulation: 619624
  },
  {
    year: 1998,
    totalPopulation: 172393
  },
  {
    year: 1994,
    totalPopulation: 151375
  },
  {
    year: 2006,
    totalPopulation: 231284
  },
  {
    year: 2034,
    totalPopulation: 472106
  },
  {
    year: 2030,
    totalPopulation: 429760
  },
  {
    year: 2037,
    totalPopulation: 501942
  },
  {
    year: 1997,
    totalPopulation: 166839
  },
  {
    year: 2013,
    totalPopulation: 269766
  },
  {
    year: 2032,
    totalPopulation: 451801
  },
  {
    year: 2031,
    totalPopulation: 441652
  },
  {
    year: 2025,
    totalPopulation: 373611
  },
  {
    year: 2035,
    totalPopulation: 482139
  },
  {
    year: 2010,
    totalPopulation: 254230
  },
  {
    year: 2045,
    totalPopulation: 576655
  },
  {
    year: 2041,
    totalPopulation: 540226
  },
  {
    year: 1995,
    totalPopulation: 157174
  },
  {
    year: 1999,
    totalPopulation: 177267
  },
  {
    year: 2027,
    totalPopulation: 395758
  },
  {
    year: 2039,
    totalPopulation: 521311
  },
  {
    year: 1996,
    totalPopulation: 161805
  },
  {
    year: 2036,
    totalPopulation: 492084
  },
  {
    year: 2001,
    totalPopulation: 192478
  },
  {
    year: 2046,
    totalPopulation: 585471
  },
  {
    year: 2023,
    totalPopulation: 356703
  },
  {
    year: 2009,
    totalPopulation: 248959
  },
  {
    year: 2033,
    totalPopulation: 461983
  },
  {
    year: 2008,
    totalPopulation: 244115
  },
  {
    year: 2014,
    totalPopulation: 275990
  },
  {
    year: 2038,
    totalPopulation: 511684
  },
  {
    year: 2005,
    totalPopulation: 223431
  },
  {
    year: 2021,
    totalPopulation: 340019
  },
  {
    year: 2040,
    totalPopulation: 530833
  },
  {
    year: 2024,
    totalPopulation: 364876
  },
  {
    year: 2002,
    totalPopulation: 198974
  },
  {
    year: 2007,
    totalPopulation: 238279
  },
  {
    year: 1993,
    totalPopulation: 145779
  },
  {
    year: 2028,
    totalPopulation: 407367
  },
  {
    year: 1990,
    totalPopulation: 131964
  },
  {
    year: 2047,
    totalPopulation: 594173
  },
  {
    year: 2043,
    totalPopulation: 558685
  },
  {
    year: 2011,
    totalPopulation: 258709
  },
  {
    year: 2016,
    totalPopulation: 294518
  },
  {
    year: 1992,
    totalPopulation: 140128
  },
  {
    year: 2022,
    totalPopulation: 347858
  },
  {
    year: 2015,
    totalPopulation: 284861
  },
  {
    year: 2020,
    totalPopulation: 331186
  },
  {
    year: 2044,
    totalPopulation: 567733
  },
  {
    year: 2012,
    totalPopulation: 263852
  },
  {
    year: 2017,
    totalPopulation: 304596
  },
  {
    year: 1991,
    totalPopulation: 135739
  },
  {
    year: 2029,
    totalPopulation: 418367
  },
  {
    year: 2003,
    totalPopulation: 207156
  },
  {
    year: 2e3,
    totalPopulation: 183074
  },
  {
    year: 2048,
    totalPopulation: 602765
  }
];
const Costilla = [
  {
    year: 2006,
    totalPopulation: 3700
  },
  {
    year: 2024,
    totalPopulation: 3416
  },
  {
    year: 2032,
    totalPopulation: 3256
  },
  {
    year: 2021,
    totalPopulation: 3474
  },
  {
    year: 1996,
    totalPopulation: 3586
  },
  {
    year: 2012,
    totalPopulation: 3513
  },
  {
    year: 2033,
    totalPopulation: 3244
  },
  {
    year: 2037,
    totalPopulation: 3171
  },
  {
    year: 2016,
    totalPopulation: 3516
  },
  {
    year: 2009,
    totalPopulation: 3504
  },
  {
    year: 2030,
    totalPopulation: 3298
  },
  {
    year: 1998,
    totalPopulation: 3708
  },
  {
    year: 1991,
    totalPopulation: 3264
  },
  {
    year: 2022,
    totalPopulation: 3449
  },
  {
    year: 2004,
    totalPopulation: 3802
  },
  {
    year: 2028,
    totalPopulation: 3331
  },
  {
    year: 2046,
    totalPopulation: 3018
  },
  {
    year: 2017,
    totalPopulation: 3518
  },
  {
    year: 2023,
    totalPopulation: 3437
  },
  {
    year: 1995,
    totalPopulation: 3521
  },
  {
    year: 1992,
    totalPopulation: 3196
  },
  {
    year: 2007,
    totalPopulation: 3677
  },
  {
    year: 2003,
    totalPopulation: 3799
  },
  {
    year: 2042,
    totalPopulation: 3087
  },
  {
    year: 2001,
    totalPopulation: 3740
  },
  {
    year: 2015,
    totalPopulation: 3515
  },
  {
    year: 2049,
    totalPopulation: 2956
  },
  {
    year: 2010,
    totalPopulation: 3532
  },
  {
    year: 1990,
    totalPopulation: 3190
  },
  {
    year: 2014,
    totalPopulation: 3516
  },
  {
    year: 2038,
    totalPopulation: 3150
  },
  {
    year: 2040,
    totalPopulation: 3118
  },
  {
    year: 2027,
    totalPopulation: 3356
  },
  {
    year: 2034,
    totalPopulation: 3224
  },
  {
    year: 2005,
    totalPopulation: 3696
  },
  {
    year: 2031,
    totalPopulation: 3287
  },
  {
    year: 2020,
    totalPopulation: 3488
  },
  {
    year: 2029,
    totalPopulation: 3321
  },
  {
    year: 2026,
    totalPopulation: 3370
  },
  {
    year: 2013,
    totalPopulation: 3517
  },
  {
    year: 2025,
    totalPopulation: 3394
  },
  {
    year: 2018,
    totalPopulation: 3512
  },
  {
    year: 1997,
    totalPopulation: 3641
  },
  {
    year: 2039,
    totalPopulation: 3133
  },
  {
    year: 2011,
    totalPopulation: 3520
  },
  {
    year: 2036,
    totalPopulation: 3186
  },
  {
    year: 1993,
    totalPopulation: 3342
  },
  {
    year: 2048,
    totalPopulation: 2980
  },
  {
    year: 1994,
    totalPopulation: 3379
  },
  {
    year: 1999,
    totalPopulation: 3680
  },
  {
    year: 2044,
    totalPopulation: 3055
  },
  {
    year: 2008,
    totalPopulation: 3614
  },
  {
    year: 2002,
    totalPopulation: 3735
  },
  {
    year: 2e3,
    totalPopulation: 3673
  },
  {
    year: 2045,
    totalPopulation: 3035
  },
  {
    year: 2035,
    totalPopulation: 3199
  },
  {
    year: 2019,
    totalPopulation: 3501
  },
  {
    year: 2043,
    totalPopulation: 3070
  },
  {
    year: 2041,
    totalPopulation: 3099
  },
  {
    year: 2047,
    totalPopulation: 3004
  },
  {
    year: 2050,
    totalPopulation: 2941
  }
];
const Broomfield = [
  {
    year: 2016,
    totalPopulation: 67702
  },
  {
    year: 2e3,
    totalPopulation: 38545
  },
  {
    year: 2026,
    totalPopulation: 87408
  },
  {
    year: 2013,
    totalPopulation: 60664
  },
  {
    year: 2042,
    totalPopulation: 95510
  },
  {
    year: 2022,
    totalPopulation: 78202
  },
  {
    year: 2025,
    totalPopulation: 85028
  },
  {
    year: 2008,
    totalPopulation: 54399
  },
  {
    year: 1993,
    totalPopulation: 0
  },
  {
    year: 2029,
    totalPopulation: 93150
  },
  {
    year: 2017,
    totalPopulation: 69658
  },
  {
    year: 2038,
    totalPopulation: 95841
  },
  {
    year: 2033,
    totalPopulation: 95267
  },
  {
    year: 2040,
    totalPopulation: 95747
  },
  {
    year: 2045,
    totalPopulation: 94924
  },
  {
    year: 2018,
    totalPopulation: 71320
  },
  {
    year: 2002,
    totalPopulation: 42430
  },
  {
    year: 2012,
    totalPopulation: 59275
  },
  {
    year: 1999,
    totalPopulation: 0
  },
  {
    year: 2031,
    totalPopulation: 94732
  },
  {
    year: 2036,
    totalPopulation: 95770
  },
  {
    year: 2015,
    totalPopulation: 65828
  },
  {
    year: 1998,
    totalPopulation: 0
  },
  {
    year: 1997,
    totalPopulation: 0
  },
  {
    year: 2007,
    totalPopulation: 53333
  },
  {
    year: 1992,
    totalPopulation: 0
  },
  {
    year: 2005,
    totalPopulation: 48250
  },
  {
    year: 1996,
    totalPopulation: 0
  },
  {
    year: 2006,
    totalPopulation: 51151
  },
  {
    year: 2020,
    totalPopulation: 74469
  },
  {
    year: 2001,
    totalPopulation: 41386
  },
  {
    year: 2027,
    totalPopulation: 89806
  },
  {
    year: 2024,
    totalPopulation: 82649
  },
  {
    year: 2048,
    totalPopulation: 94225
  },
  {
    year: 2009,
    totalPopulation: 55378
  },
  {
    year: 2037,
    totalPopulation: 95832
  },
  {
    year: 2043,
    totalPopulation: 95339
  },
  {
    year: 1990,
    totalPopulation: 0
  },
  {
    year: 2011,
    totalPopulation: 57575
  },
  {
    year: 2044,
    totalPopulation: 95146
  },
  {
    year: 1994,
    totalPopulation: 0
  },
  {
    year: 2034,
    totalPopulation: 95479
  },
  {
    year: 2030,
    totalPopulation: 94151
  },
  {
    year: 2046,
    totalPopulation: 94685
  },
  {
    year: 2019,
    totalPopulation: 72670
  },
  {
    year: 2039,
    totalPopulation: 95814
  },
  {
    year: 2050,
    totalPopulation: 93717
  },
  {
    year: 2041,
    totalPopulation: 95648
  },
  {
    year: 2010,
    totalPopulation: 56107
  },
  {
    year: 1991,
    totalPopulation: 0
  },
  {
    year: 1995,
    totalPopulation: 0
  },
  {
    year: 2004,
    totalPopulation: 46403
  },
  {
    year: 2023,
    totalPopulation: 80469
  },
  {
    year: 2021,
    totalPopulation: 76283
  },
  {
    year: 2014,
    totalPopulation: 62504
  },
  {
    year: 2047,
    totalPopulation: 94462
  },
  {
    year: 2003,
    totalPopulation: 44957
  },
  {
    year: 2035,
    totalPopulation: 95646
  },
  {
    year: 2028,
    totalPopulation: 91730
  },
  {
    year: 2032,
    totalPopulation: 95013
  },
  {
    year: 2049,
    totalPopulation: 93978
  }
];
const Jackson = [
  {
    year: 2019,
    totalPopulation: 1378
  },
  {
    year: 2038,
    totalPopulation: 1244
  },
  {
    year: 1997,
    totalPopulation: 1599
  },
  {
    year: 2033,
    totalPopulation: 1275
  },
  {
    year: 2037,
    totalPopulation: 1256
  },
  {
    year: 1998,
    totalPopulation: 1591
  },
  {
    year: 2e3,
    totalPopulation: 1574
  },
  {
    year: 2028,
    totalPopulation: 1305
  },
  {
    year: 2036,
    totalPopulation: 1257
  },
  {
    year: 2026,
    totalPopulation: 1310
  },
  {
    year: 2002,
    totalPopulation: 1590
  },
  {
    year: 2009,
    totalPopulation: 1386
  },
  {
    year: 2048,
    totalPopulation: 1188
  },
  {
    year: 2047,
    totalPopulation: 1197
  },
  {
    year: 2039,
    totalPopulation: 1238
  },
  {
    year: 2003,
    totalPopulation: 1587
  },
  {
    year: 2043,
    totalPopulation: 1210
  },
  {
    year: 2008,
    totalPopulation: 1384
  },
  {
    year: 2005,
    totalPopulation: 1489
  },
  {
    year: 2018,
    totalPopulation: 1377
  },
  {
    year: 2027,
    totalPopulation: 1309
  },
  {
    year: 1992,
    totalPopulation: 1577
  },
  {
    year: 2011,
    totalPopulation: 1382
  },
  {
    year: 2010,
    totalPopulation: 1387
  },
  {
    year: 2024,
    totalPopulation: 1330
  },
  {
    year: 2015,
    totalPopulation: 1377
  },
  {
    year: 2049,
    totalPopulation: 1185
  },
  {
    year: 2050,
    totalPopulation: 1179
  },
  {
    year: 2040,
    totalPopulation: 1232
  },
  {
    year: 2034,
    totalPopulation: 1269
  },
  {
    year: 1990,
    totalPopulation: 1605
  },
  {
    year: 2035,
    totalPopulation: 1258
  },
  {
    year: 1991,
    totalPopulation: 1560
  },
  {
    year: 2013,
    totalPopulation: 1389
  },
  {
    year: 2045,
    totalPopulation: 1200
  },
  {
    year: 2012,
    totalPopulation: 1378
  },
  {
    year: 2006,
    totalPopulation: 1441
  },
  {
    year: 2021,
    totalPopulation: 1370
  },
  {
    year: 2017,
    totalPopulation: 1379
  },
  {
    year: 2044,
    totalPopulation: 1213
  },
  {
    year: 2023,
    totalPopulation: 1346
  },
  {
    year: 2046,
    totalPopulation: 1203
  },
  {
    year: 2016,
    totalPopulation: 1377
  },
  {
    year: 2007,
    totalPopulation: 1423
  },
  {
    year: 2031,
    totalPopulation: 1286
  },
  {
    year: 2004,
    totalPopulation: 1522
  },
  {
    year: 2032,
    totalPopulation: 1280
  },
  {
    year: 2029,
    totalPopulation: 1295
  },
  {
    year: 1993,
    totalPopulation: 1628
  },
  {
    year: 2014,
    totalPopulation: 1375
  },
  {
    year: 2022,
    totalPopulation: 1358
  },
  {
    year: 1995,
    totalPopulation: 1613
  },
  {
    year: 2001,
    totalPopulation: 1590
  },
  {
    year: 2041,
    totalPopulation: 1228
  },
  {
    year: 1999,
    totalPopulation: 1580
  },
  {
    year: 2030,
    totalPopulation: 1296
  },
  {
    year: 2020,
    totalPopulation: 1375
  },
  {
    year: 1996,
    totalPopulation: 1593
  },
  {
    year: 2042,
    totalPopulation: 1223
  },
  {
    year: 1994,
    totalPopulation: 1646
  },
  {
    year: 2025,
    totalPopulation: 1323
  }
];
const Chaffee = [
  {
    year: 1998,
    totalPopulation: 15528
  },
  {
    year: 2022,
    totalPopulation: 19734
  },
  {
    year: 2033,
    totalPopulation: 21406
  },
  {
    year: 1996,
    totalPopulation: 15124
  },
  {
    year: 2e3,
    totalPopulation: 16312
  },
  {
    year: 2036,
    totalPopulation: 21684
  },
  {
    year: 2042,
    totalPopulation: 22175
  },
  {
    year: 2049,
    totalPopulation: 22548
  },
  {
    year: 2020,
    totalPopulation: 19514
  },
  {
    year: 2027,
    totalPopulation: 20469
  },
  {
    year: 2008,
    totalPopulation: 17399
  },
  {
    year: 1994,
    totalPopulation: 14104
  },
  {
    year: 2045,
    totalPopulation: 22359
  },
  {
    year: 2013,
    totalPopulation: 18035
  },
  {
    year: 1995,
    totalPopulation: 14659
  },
  {
    year: 1999,
    totalPopulation: 15935
  },
  {
    year: 2046,
    totalPopulation: 22411
  },
  {
    year: 2031,
    totalPopulation: 21186
  },
  {
    year: 2024,
    totalPopulation: 19992
  },
  {
    year: 2028,
    totalPopulation: 20655
  },
  {
    year: 2015,
    totalPopulation: 18103
  },
  {
    year: 2026,
    totalPopulation: 20285
  },
  {
    year: 2009,
    totalPopulation: 17603
  },
  {
    year: 2003,
    totalPopulation: 16793
  },
  {
    year: 2004,
    totalPopulation: 16943
  },
  {
    year: 1993,
    totalPopulation: 13702
  },
  {
    year: 1991,
    totalPopulation: 12866
  },
  {
    year: 2023,
    totalPopulation: 19871
  },
  {
    year: 2047,
    totalPopulation: 22459
  },
  {
    year: 2019,
    totalPopulation: 19392
  },
  {
    year: 1992,
    totalPopulation: 13119
  },
  {
    year: 2041,
    totalPopulation: 22092
  },
  {
    year: 2002,
    totalPopulation: 16642
  },
  {
    year: 2014,
    totalPopulation: 18065
  },
  {
    year: 2048,
    totalPopulation: 22508
  },
  {
    year: 2040,
    totalPopulation: 22011
  },
  {
    year: 2016,
    totalPopulation: 18518
  },
  {
    year: 2035,
    totalPopulation: 21591
  },
  {
    year: 2001,
    totalPopulation: 16411
  },
  {
    year: 2034,
    totalPopulation: 21504
  },
  {
    year: 2011,
    totalPopulation: 17937
  },
  {
    year: 2021,
    totalPopulation: 19630
  },
  {
    year: 2012,
    totalPopulation: 17968
  },
  {
    year: 2005,
    totalPopulation: 17019
  },
  {
    year: 2018,
    totalPopulation: 19248
  },
  {
    year: 2037,
    totalPopulation: 21769
  },
  {
    year: 2007,
    totalPopulation: 17234
  },
  {
    year: 2030,
    totalPopulation: 21014
  },
  {
    year: 2025,
    totalPopulation: 20126
  },
  {
    year: 2043,
    totalPopulation: 22235
  },
  {
    year: 2044,
    totalPopulation: 22297
  },
  {
    year: 1990,
    totalPopulation: 12684
  },
  {
    year: 2006,
    totalPopulation: 16983
  },
  {
    year: 2032,
    totalPopulation: 21303
  },
  {
    year: 2010,
    totalPopulation: 17797
  },
  {
    year: 2017,
    totalPopulation: 18970
  },
  {
    year: 2029,
    totalPopulation: 20826
  },
  {
    year: 1997,
    totalPopulation: 15409
  },
  {
    year: 2039,
    totalPopulation: 21935
  },
  {
    year: 2038,
    totalPopulation: 21853
  },
  {
    year: 2050,
    totalPopulation: 22593
  }
];
const Eagle = [
  {
    year: 2017,
    totalPopulation: 53719
  },
  {
    year: 2024,
    totalPopulation: 57189
  },
  {
    year: 1996,
    totalPopulation: 32928
  },
  {
    year: 2027,
    totalPopulation: 58484
  },
  {
    year: 2032,
    totalPopulation: 61248
  },
  {
    year: 2023,
    totalPopulation: 56766
  },
  {
    year: 2022,
    totalPopulation: 56227
  },
  {
    year: 2029,
    totalPopulation: 59353
  },
  {
    year: 2049,
    totalPopulation: 70845
  },
  {
    year: 2042,
    totalPopulation: 67838
  },
  {
    year: 1998,
    totalPopulation: 37611
  },
  {
    year: 2033,
    totalPopulation: 61991
  },
  {
    year: 1997,
    totalPopulation: 35206
  },
  {
    year: 2003,
    totalPopulation: 45757
  },
  {
    year: 2028,
    totalPopulation: 58924
  },
  {
    year: 1995,
    totalPopulation: 30882
  },
  {
    year: 2002,
    totalPopulation: 45104
  },
  {
    year: 2010,
    totalPopulation: 52057
  },
  {
    year: 2041,
    totalPopulation: 67300
  },
  {
    year: 2040,
    totalPopulation: 66725
  },
  {
    year: 2001,
    totalPopulation: 44440
  },
  {
    year: 2007,
    totalPopulation: 49286
  },
  {
    year: 2004,
    totalPopulation: 46480
  },
  {
    year: 2038,
    totalPopulation: 65499
  },
  {
    year: 1994,
    totalPopulation: 29026
  },
  {
    year: 1999,
    totalPopulation: 39910
  },
  {
    year: 2011,
    totalPopulation: 52124
  },
  {
    year: 2005,
    totalPopulation: 47278
  },
  {
    year: 2019,
    totalPopulation: 54817
  },
  {
    year: 2030,
    totalPopulation: 59764
  },
  {
    year: 2046,
    totalPopulation: 69722
  },
  {
    year: 2013,
    totalPopulation: 52262
  },
  {
    year: 2048,
    totalPopulation: 70488
  },
  {
    year: 1992,
    totalPopulation: 24938
  },
  {
    year: 2050,
    totalPopulation: 71179
  },
  {
    year: 2014,
    totalPopulation: 52399
  },
  {
    year: 2039,
    totalPopulation: 66130
  },
  {
    year: 2037,
    totalPopulation: 64854
  },
  {
    year: 2016,
    totalPopulation: 53039
  },
  {
    year: 2025,
    totalPopulation: 57618
  },
  {
    year: 2044,
    totalPopulation: 68840
  },
  {
    year: 2036,
    totalPopulation: 64168
  },
  {
    year: 1993,
    totalPopulation: 26834
  },
  {
    year: 2026,
    totalPopulation: 58054
  },
  {
    year: 2047,
    totalPopulation: 70115
  },
  {
    year: 2012,
    totalPopulation: 52158
  },
  {
    year: 2e3,
    totalPopulation: 43288
  },
  {
    year: 2020,
    totalPopulation: 55626
  },
  {
    year: 2034,
    totalPopulation: 62737
  },
  {
    year: 2018,
    totalPopulation: 54207
  },
  {
    year: 2045,
    totalPopulation: 69285
  },
  {
    year: 2031,
    totalPopulation: 60502
  },
  {
    year: 2043,
    totalPopulation: 68358
  },
  {
    year: 1991,
    totalPopulation: 23459
  },
  {
    year: 1990,
    totalPopulation: 22106
  },
  {
    year: 2008,
    totalPopulation: 50301
  },
  {
    year: 2021,
    totalPopulation: 55686
  },
  {
    year: 2006,
    totalPopulation: 48215
  },
  {
    year: 2009,
    totalPopulation: 51522
  },
  {
    year: 2015,
    totalPopulation: 52786
  },
  {
    year: 2035,
    totalPopulation: 63462
  }
];
const Montrose = [
  {
    year: 2025,
    totalPopulation: 45521
  },
  {
    year: 2008,
    totalPopulation: 39947
  },
  {
    year: 2043,
    totalPopulation: 54852
  },
  {
    year: 2014,
    totalPopulation: 41385
  },
  {
    year: 2006,
    totalPopulation: 37973
  },
  {
    year: 2019,
    totalPopulation: 42503
  },
  {
    year: 1995,
    totalPopulation: 29669
  },
  {
    year: 2002,
    totalPopulation: 34932
  },
  {
    year: 2034,
    totalPopulation: 51029
  },
  {
    year: 2036,
    totalPopulation: 52109
  },
  {
    year: 1997,
    totalPopulation: 31251
  },
  {
    year: 2050,
    totalPopulation: 55996
  },
  {
    year: 2004,
    totalPopulation: 36129
  },
  {
    year: 2040,
    totalPopulation: 53869
  },
  {
    year: 2013,
    totalPopulation: 41331
  },
  {
    year: 2042,
    totalPopulation: 54554
  },
  {
    year: 2044,
    totalPopulation: 55106
  },
  {
    year: 2016,
    totalPopulation: 41595
  },
  {
    year: 2003,
    totalPopulation: 35637
  },
  {
    year: 2037,
    totalPopulation: 52597
  },
  {
    year: 2009,
    totalPopulation: 40685
  },
  {
    year: 2015,
    totalPopulation: 41458
  },
  {
    year: 2011,
    totalPopulation: 41249
  },
  {
    year: 2001,
    totalPopulation: 34443
  },
  {
    year: 2022,
    totalPopulation: 43799
  },
  {
    year: 2017,
    totalPopulation: 41765
  },
  {
    year: 1992,
    totalPopulation: 26219
  },
  {
    year: 2007,
    totalPopulation: 39129
  },
  {
    year: 2028,
    totalPopulation: 47345
  },
  {
    year: 2023,
    totalPopulation: 44375
  },
  {
    year: 2039,
    totalPopulation: 53476
  },
  {
    year: 2e3,
    totalPopulation: 33579
  },
  {
    year: 2038,
    totalPopulation: 53058
  },
  {
    year: 2024,
    totalPopulation: 44937
  },
  {
    year: 2035,
    totalPopulation: 51591
  },
  {
    year: 1999,
    totalPopulation: 32750
  },
  {
    year: 2049,
    totalPopulation: 55924
  },
  {
    year: 2029,
    totalPopulation: 47985
  },
  {
    year: 2046,
    totalPopulation: 55531
  },
  {
    year: 2033,
    totalPopulation: 50460
  },
  {
    year: 2032,
    totalPopulation: 49883
  },
  {
    year: 2045,
    totalPopulation: 55333
  },
  {
    year: 2030,
    totalPopulation: 48646
  },
  {
    year: 1996,
    totalPopulation: 30482
  },
  {
    year: 1991,
    totalPopulation: 25272
  },
  {
    year: 2047,
    totalPopulation: 55691
  },
  {
    year: 1998,
    totalPopulation: 31833
  },
  {
    year: 2027,
    totalPopulation: 46720
  },
  {
    year: 2031,
    totalPopulation: 49269
  },
  {
    year: 2026,
    totalPopulation: 46117
  },
  {
    year: 2021,
    totalPopulation: 43302
  },
  {
    year: 1994,
    totalPopulation: 28505
  },
  {
    year: 1993,
    totalPopulation: 27284
  },
  {
    year: 2012,
    totalPopulation: 41300
  },
  {
    year: 2020,
    totalPopulation: 42809
  },
  {
    year: 2005,
    totalPopulation: 36999
  },
  {
    year: 2018,
    totalPopulation: 42083
  },
  {
    year: 2041,
    totalPopulation: 54228
  },
  {
    year: 2010,
    totalPopulation: 41188
  },
  {
    year: 1990,
    totalPopulation: 24563
  },
  {
    year: 2048,
    totalPopulation: 55824
  }
];
const Elbert = [
  {
    year: 2044,
    totalPopulation: 37875
  },
  {
    year: 1993,
    totalPopulation: 11535
  },
  {
    year: 2015,
    totalPopulation: 24062
  },
  {
    year: 2020,
    totalPopulation: 26187
  },
  {
    year: 2049,
    totalPopulation: 37708
  },
  {
    year: 2024,
    totalPopulation: 29068
  },
  {
    year: 2011,
    totalPopulation: 23032
  },
  {
    year: 2029,
    totalPopulation: 33474
  },
  {
    year: 2007,
    totalPopulation: 22480
  },
  {
    year: 2017,
    totalPopulation: 24946
  },
  {
    year: 1992,
    totalPopulation: 10764
  },
  {
    year: 2031,
    totalPopulation: 34858
  },
  {
    year: 2025,
    totalPopulation: 29987
  },
  {
    year: 2010,
    totalPopulation: 23107
  },
  {
    year: 2028,
    totalPopulation: 32693
  },
  {
    year: 2016,
    totalPopulation: 24448
  },
  {
    year: 1991,
    totalPopulation: 10267
  },
  {
    year: 2050,
    totalPopulation: 37670
  },
  {
    year: 2018,
    totalPopulation: 25364
  },
  {
    year: 1996,
    totalPopulation: 15812
  },
  {
    year: 2033,
    totalPopulation: 35988
  },
  {
    year: 2026,
    totalPopulation: 30944
  },
  {
    year: 2001,
    totalPopulation: 21294
  },
  {
    year: 1999,
    totalPopulation: 19086
  },
  {
    year: 2032,
    totalPopulation: 35459
  },
  {
    year: 2030,
    totalPopulation: 34202
  },
  {
    year: 2035,
    totalPopulation: 36866
  },
  {
    year: 2048,
    totalPopulation: 37752
  },
  {
    year: 2046,
    totalPopulation: 37826
  },
  {
    year: 2037,
    totalPopulation: 37460
  },
  {
    year: 2005,
    totalPopulation: 22259
  },
  {
    year: 2002,
    totalPopulation: 21606
  },
  {
    year: 2039,
    totalPopulation: 37810
  },
  {
    year: 1995,
    totalPopulation: 14325
  },
  {
    year: 2009,
    totalPopulation: 22892
  },
  {
    year: 1997,
    totalPopulation: 16987
  },
  {
    year: 2019,
    totalPopulation: 25668
  },
  {
    year: 2038,
    totalPopulation: 37665
  },
  {
    year: 2e3,
    totalPopulation: 20102
  },
  {
    year: 2023,
    totalPopulation: 28167
  },
  {
    year: 2008,
    totalPopulation: 22664
  },
  {
    year: 2003,
    totalPopulation: 21938
  },
  {
    year: 2013,
    totalPopulation: 23184
  },
  {
    year: 1990,
    totalPopulation: 9746
  },
  {
    year: 2012,
    totalPopulation: 23033
  },
  {
    year: 2040,
    totalPopulation: 37888
  },
  {
    year: 2004,
    totalPopulation: 22040
  },
  {
    year: 1998,
    totalPopulation: 18030
  },
  {
    year: 1994,
    totalPopulation: 12846
  },
  {
    year: 2047,
    totalPopulation: 37792
  },
  {
    year: 2027,
    totalPopulation: 31845
  },
  {
    year: 2034,
    totalPopulation: 36462
  },
  {
    year: 2045,
    totalPopulation: 37856
  },
  {
    year: 2041,
    totalPopulation: 37898
  },
  {
    year: 2036,
    totalPopulation: 37197
  },
  {
    year: 2014,
    totalPopulation: 23569
  },
  {
    year: 2043,
    totalPopulation: 37896
  },
  {
    year: 2022,
    totalPopulation: 27262
  },
  {
    year: 2042,
    totalPopulation: 37904
  },
  {
    year: 2006,
    totalPopulation: 22526
  },
  {
    year: 2021,
    totalPopulation: 26470
  }
];
const Washington = [
  {
    year: 2043,
    totalPopulation: 4606
  },
  {
    year: 2033,
    totalPopulation: 4923
  },
  {
    year: 1997,
    totalPopulation: 5214
  },
  {
    year: 1996,
    totalPopulation: 5224
  },
  {
    year: 2016,
    totalPopulation: 4745
  },
  {
    year: 1994,
    totalPopulation: 5220
  },
  {
    year: 2036,
    totalPopulation: 4851
  },
  {
    year: 2041,
    totalPopulation: 4686
  },
  {
    year: 2009,
    totalPopulation: 4777
  },
  {
    year: 2046,
    totalPopulation: 4471
  },
  {
    year: 2037,
    totalPopulation: 4819
  },
  {
    year: 2032,
    totalPopulation: 4932
  },
  {
    year: 2030,
    totalPopulation: 4934
  },
  {
    year: 2006,
    totalPopulation: 4981
  },
  {
    year: 1999,
    totalPopulation: 5022
  },
  {
    year: 2018,
    totalPopulation: 4814
  },
  {
    year: 2010,
    totalPopulation: 4815
  },
  {
    year: 2007,
    totalPopulation: 4925
  },
  {
    year: 2022,
    totalPopulation: 4837
  },
  {
    year: 2034,
    totalPopulation: 4894
  },
  {
    year: 2050,
    totalPopulation: 4277
  },
  {
    year: 2029,
    totalPopulation: 4922
  },
  {
    year: 2039,
    totalPopulation: 4759
  },
  {
    year: 2040,
    totalPopulation: 4716
  },
  {
    year: 2038,
    totalPopulation: 4793
  },
  {
    year: 2048,
    totalPopulation: 4373
  },
  {
    year: 2035,
    totalPopulation: 4876
  },
  {
    year: 2013,
    totalPopulation: 4617
  },
  {
    year: 1995,
    totalPopulation: 5236
  },
  {
    year: 2004,
    totalPopulation: 5061
  },
  {
    year: 2008,
    totalPopulation: 4802
  },
  {
    year: 2017,
    totalPopulation: 4844
  },
  {
    year: 2044,
    totalPopulation: 4569
  },
  {
    year: 1992,
    totalPopulation: 4892
  },
  {
    year: 2003,
    totalPopulation: 5141
  },
  {
    year: 2001,
    totalPopulation: 4895
  },
  {
    year: 2021,
    totalPopulation: 4819
  },
  {
    year: 2020,
    totalPopulation: 4829
  },
  {
    year: 2042,
    totalPopulation: 4644
  },
  {
    year: 2025,
    totalPopulation: 4884
  },
  {
    year: 2028,
    totalPopulation: 4912
  },
  {
    year: 2e3,
    totalPopulation: 4942
  },
  {
    year: 1998,
    totalPopulation: 5155
  },
  {
    year: 2002,
    totalPopulation: 5255
  },
  {
    year: 2031,
    totalPopulation: 4930
  },
  {
    year: 2014,
    totalPopulation: 4610
  },
  {
    year: 2049,
    totalPopulation: 4321
  },
  {
    year: 2019,
    totalPopulation: 4825
  },
  {
    year: 2026,
    totalPopulation: 4898
  },
  {
    year: 1991,
    totalPopulation: 4784
  },
  {
    year: 2015,
    totalPopulation: 4683
  },
  {
    year: 2027,
    totalPopulation: 4901
  },
  {
    year: 2011,
    totalPopulation: 4610
  },
  {
    year: 2024,
    totalPopulation: 4867
  },
  {
    year: 1990,
    totalPopulation: 4812
  },
  {
    year: 2005,
    totalPopulation: 4997
  },
  {
    year: 2023,
    totalPopulation: 4847
  },
  {
    year: 1993,
    totalPopulation: 5139
  },
  {
    year: 2045,
    totalPopulation: 4524
  },
  {
    year: 2012,
    totalPopulation: 4562
  },
  {
    year: 2047,
    totalPopulation: 4427
  }
];
const Pueblo = [
  {
    year: 2008,
    totalPopulation: 156250
  },
  {
    year: 1991,
    totalPopulation: 123482
  },
  {
    year: 2047,
    totalPopulation: 193458
  },
  {
    year: 2014,
    totalPopulation: 160871
  },
  {
    year: 2038,
    totalPopulation: 188028
  },
  {
    year: 2004,
    totalPopulation: 148721
  },
  {
    year: 2043,
    totalPopulation: 191515
  },
  {
    year: 2001,
    totalPopulation: 143993
  },
  {
    year: 2006,
    totalPopulation: 152061
  },
  {
    year: 1999,
    totalPopulation: 139718
  },
  {
    year: 2005,
    totalPopulation: 149974
  },
  {
    year: 2033,
    totalPopulation: 183283
  },
  {
    year: 1992,
    totalPopulation: 124412
  },
  {
    year: 2050,
    totalPopulation: 194564
  },
  {
    year: 2046,
    totalPopulation: 193033
  },
  {
    year: 2037,
    totalPopulation: 187185
  },
  {
    year: 2041,
    totalPopulation: 190277
  },
  {
    year: 2031,
    totalPopulation: 181032
  },
  {
    year: 2019,
    totalPopulation: 167484
  },
  {
    year: 2040,
    totalPopulation: 189576
  },
  {
    year: 1994,
    totalPopulation: 128721
  },
  {
    year: 2012,
    totalPopulation: 160334
  },
  {
    year: 2027,
    totalPopulation: 176074
  },
  {
    year: 2034,
    totalPopulation: 184335
  },
  {
    year: 2011,
    totalPopulation: 159837
  },
  {
    year: 2029,
    totalPopulation: 178607
  },
  {
    year: 2042,
    totalPopulation: 190917
  },
  {
    year: 2044,
    totalPopulation: 192060
  },
  {
    year: 1997,
    totalPopulation: 134794
  },
  {
    year: 2035,
    totalPopulation: 185330
  },
  {
    year: 2018,
    totalPopulation: 166685
  },
  {
    year: 1995,
    totalPopulation: 130831
  },
  {
    year: 2021,
    totalPopulation: 169373
  },
  {
    year: 2036,
    totalPopulation: 186280
  },
  {
    year: 1996,
    totalPopulation: 132502
  },
  {
    year: 2028,
    totalPopulation: 177347
  },
  {
    year: 2009,
    totalPopulation: 157323
  },
  {
    year: 2045,
    totalPopulation: 192565
  },
  {
    year: 2032,
    totalPopulation: 182177
  },
  {
    year: 2049,
    totalPopulation: 194221
  },
  {
    year: 2002,
    totalPopulation: 146482
  },
  {
    year: 2039,
    totalPopulation: 188830
  },
  {
    year: 2e3,
    totalPopulation: 141854
  },
  {
    year: 2015,
    totalPopulation: 162447
  },
  {
    year: 2020,
    totalPopulation: 168429
  },
  {
    year: 2013,
    totalPopulation: 160563
  },
  {
    year: 2024,
    totalPopulation: 172135
  },
  {
    year: 2016,
    totalPopulation: 164122
  },
  {
    year: 1990,
    totalPopulation: 122886
  },
  {
    year: 2017,
    totalPopulation: 165553
  },
  {
    year: 2010,
    totalPopulation: 159496
  },
  {
    year: 2007,
    totalPopulation: 154759
  },
  {
    year: 1993,
    totalPopulation: 126356
  },
  {
    year: 1998,
    totalPopulation: 137381
  },
  {
    year: 2003,
    totalPopulation: 147967
  },
  {
    year: 2022,
    totalPopulation: 170004
  },
  {
    year: 2026,
    totalPopulation: 174779
  },
  {
    year: 2030,
    totalPopulation: 179837
  },
  {
    year: 2025,
    totalPopulation: 173461
  },
  {
    year: 2023,
    totalPopulation: 171021
  },
  {
    year: 2048,
    totalPopulation: 193861
  }
];
const Gunnison = [
  {
    year: 2030,
    totalPopulation: 18149
  },
  {
    year: 2039,
    totalPopulation: 19388
  },
  {
    year: 2047,
    totalPopulation: 20218
  },
  {
    year: 2009,
    totalPopulation: 15269
  },
  {
    year: 1992,
    totalPopulation: 10771
  },
  {
    year: 2028,
    totalPopulation: 17857
  },
  {
    year: 2003,
    totalPopulation: 14208
  },
  {
    year: 2018,
    totalPopulation: 16679
  },
  {
    year: 2027,
    totalPopulation: 17714
  },
  {
    year: 2031,
    totalPopulation: 18290
  },
  {
    year: 2017,
    totalPopulation: 16467
  },
  {
    year: 2044,
    totalPopulation: 19944
  },
  {
    year: 2020,
    totalPopulation: 16943
  },
  {
    year: 2046,
    totalPopulation: 20119
  },
  {
    year: 2023,
    totalPopulation: 17187
  },
  {
    year: 1994,
    totalPopulation: 11667
  },
  {
    year: 2026,
    totalPopulation: 17556
  },
  {
    year: 2005,
    totalPopulation: 14473
  },
  {
    year: 1995,
    totalPopulation: 11982
  },
  {
    year: 2007,
    totalPopulation: 14950
  },
  {
    year: 1996,
    totalPopulation: 12241
  },
  {
    year: 2041,
    totalPopulation: 19642
  },
  {
    year: 1990,
    totalPopulation: 10273
  },
  {
    year: 1998,
    totalPopulation: 13444
  },
  {
    year: 2006,
    totalPopulation: 14648
  },
  {
    year: 2036,
    totalPopulation: 18978
  },
  {
    year: 2014,
    totalPopulation: 15553
  },
  {
    year: 2029,
    totalPopulation: 18010
  },
  {
    year: 2025,
    totalPopulation: 17441
  },
  {
    year: 2012,
    totalPopulation: 15269
  },
  {
    year: 2038,
    totalPopulation: 19250
  },
  {
    year: 2e3,
    totalPopulation: 13988
  },
  {
    year: 2037,
    totalPopulation: 19113
  },
  {
    year: 2034,
    totalPopulation: 18701
  },
  {
    year: 2050,
    totalPopulation: 20477
  },
  {
    year: 2049,
    totalPopulation: 20393
  },
  {
    year: 2010,
    totalPopulation: 15309
  },
  {
    year: 2021,
    totalPopulation: 16946
  },
  {
    year: 2048,
    totalPopulation: 20300
  },
  {
    year: 2035,
    totalPopulation: 18841
  },
  {
    year: 1991,
    totalPopulation: 10413
  },
  {
    year: 2004,
    totalPopulation: 14226
  },
  {
    year: 2002,
    totalPopulation: 14310
  },
  {
    year: 2016,
    totalPopulation: 16084
  },
  {
    year: 2022,
    totalPopulation: 17051
  },
  {
    year: 1999,
    totalPopulation: 13736
  },
  {
    year: 2043,
    totalPopulation: 19844
  },
  {
    year: 2015,
    totalPopulation: 15822
  },
  {
    year: 1993,
    totalPopulation: 11306
  },
  {
    year: 2024,
    totalPopulation: 17303
  },
  {
    year: 2045,
    totalPopulation: 20034
  },
  {
    year: 2040,
    totalPopulation: 19515
  },
  {
    year: 2001,
    totalPopulation: 14340
  },
  {
    year: 2033,
    totalPopulation: 18569
  },
  {
    year: 2011,
    totalPopulation: 15347
  },
  {
    year: 2019,
    totalPopulation: 16940
  },
  {
    year: 2008,
    totalPopulation: 15138
  },
  {
    year: 2013,
    totalPopulation: 15421
  },
  {
    year: 2042,
    totalPopulation: 19746
  },
  {
    year: 1997,
    totalPopulation: 12396
  },
  {
    year: 2032,
    totalPopulation: 18421
  }
];
const Saguache = [
  {
    year: 2046,
    totalPopulation: 6746
  },
  {
    year: 2042,
    totalPopulation: 6692
  },
  {
    year: 2020,
    totalPopulation: 6409
  },
  {
    year: 2005,
    totalPopulation: 6286
  },
  {
    year: 2022,
    totalPopulation: 6479
  },
  {
    year: 2003,
    totalPopulation: 6281
  },
  {
    year: 1996,
    totalPopulation: 5426
  },
  {
    year: 2006,
    totalPopulation: 6242
  },
  {
    year: 2049,
    totalPopulation: 6791
  },
  {
    year: 2009,
    totalPopulation: 6128
  },
  {
    year: 2013,
    totalPopulation: 6163
  },
  {
    year: 1990,
    totalPopulation: 4619
  },
  {
    year: 2002,
    totalPopulation: 6244
  },
  {
    year: 2024,
    totalPopulation: 6522
  },
  {
    year: 1992,
    totalPopulation: 4796
  },
  {
    year: 1997,
    totalPopulation: 5492
  },
  {
    year: 1993,
    totalPopulation: 4831
  },
  {
    year: 2028,
    totalPopulation: 6559
  },
  {
    year: 2025,
    totalPopulation: 6534
  },
  {
    year: 2033,
    totalPopulation: 6596
  },
  {
    year: 2010,
    totalPopulation: 6144
  },
  {
    year: 2034,
    totalPopulation: 6616
  },
  {
    year: 2047,
    totalPopulation: 6760
  },
  {
    year: 2039,
    totalPopulation: 6668
  },
  {
    year: 2017,
    totalPopulation: 6210
  },
  {
    year: 2023,
    totalPopulation: 6506
  },
  {
    year: 2048,
    totalPopulation: 6772
  },
  {
    year: 2031,
    totalPopulation: 6583
  },
  {
    year: 2027,
    totalPopulation: 6549
  },
  {
    year: 1994,
    totalPopulation: 4943
  },
  {
    year: 2021,
    totalPopulation: 6470
  },
  {
    year: 2032,
    totalPopulation: 6590
  },
  {
    year: 2043,
    totalPopulation: 6712
  },
  {
    year: 2018,
    totalPopulation: 6272
  },
  {
    year: 2040,
    totalPopulation: 6679
  },
  {
    year: 2001,
    totalPopulation: 6080
  },
  {
    year: 2e3,
    totalPopulation: 5982
  },
  {
    year: 1995,
    totalPopulation: 5273
  },
  {
    year: 2011,
    totalPopulation: 6159
  },
  {
    year: 2045,
    totalPopulation: 6729
  },
  {
    year: 2029,
    totalPopulation: 6562
  },
  {
    year: 2041,
    totalPopulation: 6689
  },
  {
    year: 2019,
    totalPopulation: 6363
  },
  {
    year: 2012,
    totalPopulation: 6158
  },
  {
    year: 2036,
    totalPopulation: 6627
  },
  {
    year: 2016,
    totalPopulation: 6190
  },
  {
    year: 2008,
    totalPopulation: 6181
  },
  {
    year: 2014,
    totalPopulation: 6174
  },
  {
    year: 2044,
    totalPopulation: 6723
  },
  {
    year: 2035,
    totalPopulation: 6617
  },
  {
    year: 1999,
    totalPopulation: 5772
  },
  {
    year: 2038,
    totalPopulation: 6649
  },
  {
    year: 2007,
    totalPopulation: 6153
  },
  {
    year: 2037,
    totalPopulation: 6637
  },
  {
    year: 2030,
    totalPopulation: 6573
  },
  {
    year: 1991,
    totalPopulation: 4735
  },
  {
    year: 1998,
    totalPopulation: 5564
  },
  {
    year: 2026,
    totalPopulation: 6539
  },
  {
    year: 2004,
    totalPopulation: 6242
  },
  {
    year: 2050,
    totalPopulation: 6809
  },
  {
    year: 2015,
    totalPopulation: 6180
  }
];
const Ouray = [
  {
    year: 2030,
    totalPopulation: 5047
  },
  {
    year: 2049,
    totalPopulation: 5716
  },
  {
    year: 1993,
    totalPopulation: 2652
  },
  {
    year: 1990,
    totalPopulation: 2295
  },
  {
    year: 2031,
    totalPopulation: 5072
  },
  {
    year: 2013,
    totalPopulation: 4519
  },
  {
    year: 2023,
    totalPopulation: 4908
  },
  {
    year: 2047,
    totalPopulation: 5630
  },
  {
    year: 2027,
    totalPopulation: 4983
  },
  {
    year: 2016,
    totalPopulation: 4718
  },
  {
    year: 2040,
    totalPopulation: 5356
  },
  {
    year: 2022,
    totalPopulation: 4888
  },
  {
    year: 2029,
    totalPopulation: 5022
  },
  {
    year: 2025,
    totalPopulation: 4942
  },
  {
    year: 2028,
    totalPopulation: 4997
  },
  {
    year: 2009,
    totalPopulation: 4372
  },
  {
    year: 2024,
    totalPopulation: 4933
  },
  {
    year: 2020,
    totalPopulation: 4881
  },
  {
    year: 2004,
    totalPopulation: 4028
  },
  {
    year: 2044,
    totalPopulation: 5513
  },
  {
    year: 1996,
    totalPopulation: 3256
  },
  {
    year: 2008,
    totalPopulation: 4407
  },
  {
    year: 2021,
    totalPopulation: 4869
  },
  {
    year: 2005,
    totalPopulation: 4083
  },
  {
    year: 2033,
    totalPopulation: 5125
  },
  {
    year: 2002,
    totalPopulation: 3905
  },
  {
    year: 2014,
    totalPopulation: 4531
  },
  {
    year: 2006,
    totalPopulation: 4138
  },
  {
    year: 2036,
    totalPopulation: 5220
  },
  {
    year: 2048,
    totalPopulation: 5665
  },
  {
    year: 2045,
    totalPopulation: 5543
  },
  {
    year: 2043,
    totalPopulation: 5469
  },
  {
    year: 2011,
    totalPopulation: 4405
  },
  {
    year: 2037,
    totalPopulation: 5253
  },
  {
    year: 2050,
    totalPopulation: 5751
  },
  {
    year: 1994,
    totalPopulation: 2904
  },
  {
    year: 2042,
    totalPopulation: 5430
  },
  {
    year: 1995,
    totalPopulation: 3080
  },
  {
    year: 2015,
    totalPopulation: 4551
  },
  {
    year: 1999,
    totalPopulation: 3627
  },
  {
    year: 2026,
    totalPopulation: 4959
  },
  {
    year: 2010,
    totalPopulation: 4446
  },
  {
    year: 1991,
    totalPopulation: 2414
  },
  {
    year: 2035,
    totalPopulation: 5185
  },
  {
    year: 1997,
    totalPopulation: 3324
  },
  {
    year: 2039,
    totalPopulation: 5325
  },
  {
    year: 2032,
    totalPopulation: 5100
  },
  {
    year: 2046,
    totalPopulation: 5591
  },
  {
    year: 2017,
    totalPopulation: 4729
  },
  {
    year: 2038,
    totalPopulation: 5284
  },
  {
    year: 2019,
    totalPopulation: 4894
  },
  {
    year: 1992,
    totalPopulation: 2533
  },
  {
    year: 1998,
    totalPopulation: 3457
  },
  {
    year: 2e3,
    totalPopulation: 3776
  },
  {
    year: 2003,
    totalPopulation: 3908
  },
  {
    year: 2034,
    totalPopulation: 5156
  },
  {
    year: 2012,
    totalPopulation: 4471
  },
  {
    year: 2041,
    totalPopulation: 5398
  },
  {
    year: 2001,
    totalPopulation: 3812
  },
  {
    year: 2018,
    totalPopulation: 4735
  },
  {
    year: 2007,
    totalPopulation: 4275
  }
];
const Custer = [
  {
    year: 1990,
    totalPopulation: 1926
  },
  {
    year: 1994,
    totalPopulation: 2414
  },
  {
    year: 2042,
    totalPopulation: 4080
  },
  {
    year: 2044,
    totalPopulation: 4009
  },
  {
    year: 2028,
    totalPopulation: 4575
  },
  {
    year: 2039,
    totalPopulation: 4204
  },
  {
    year: 2033,
    totalPopulation: 4420
  },
  {
    year: 2014,
    totalPopulation: 4440
  },
  {
    year: 2020,
    totalPopulation: 4710
  },
  {
    year: 2012,
    totalPopulation: 4371
  },
  {
    year: 2036,
    totalPopulation: 4311
  },
  {
    year: 2038,
    totalPopulation: 4238
  },
  {
    year: 2002,
    totalPopulation: 3781
  },
  {
    year: 2047,
    totalPopulation: 3891
  },
  {
    year: 2017,
    totalPopulation: 4542
  },
  {
    year: 1997,
    totalPopulation: 3060
  },
  {
    year: 1999,
    totalPopulation: 3357
  },
  {
    year: 2050,
    totalPopulation: 3782
  },
  {
    year: 2019,
    totalPopulation: 4641
  },
  {
    year: 1993,
    totalPopulation: 2322
  },
  {
    year: 2045,
    totalPopulation: 3965
  },
  {
    year: 2008,
    totalPopulation: 4119
  },
  {
    year: 2032,
    totalPopulation: 4455
  },
  {
    year: 2035,
    totalPopulation: 4351
  },
  {
    year: 2009,
    totalPopulation: 4165
  },
  {
    year: 1991,
    totalPopulation: 2010
  },
  {
    year: 2043,
    totalPopulation: 4043
  },
  {
    year: 2006,
    totalPopulation: 4023
  },
  {
    year: 1992,
    totalPopulation: 2139
  },
  {
    year: 2013,
    totalPopulation: 4407
  },
  {
    year: 1996,
    totalPopulation: 2850
  },
  {
    year: 2e3,
    totalPopulation: 3518
  },
  {
    year: 2007,
    totalPopulation: 4124
  },
  {
    year: 2024,
    totalPopulation: 4667
  },
  {
    year: 2026,
    totalPopulation: 4625
  },
  {
    year: 2025,
    totalPopulation: 4647
  },
  {
    year: 2046,
    totalPopulation: 3924
  },
  {
    year: 2049,
    totalPopulation: 3814
  },
  {
    year: 2015,
    totalPopulation: 4467
  },
  {
    year: 2040,
    totalPopulation: 4161
  },
  {
    year: 1995,
    totalPopulation: 2621
  },
  {
    year: 2016,
    totalPopulation: 4499
  },
  {
    year: 2010,
    totalPopulation: 4272
  },
  {
    year: 1998,
    totalPopulation: 3174
  },
  {
    year: 2023,
    totalPopulation: 4688
  },
  {
    year: 2018,
    totalPopulation: 4589
  },
  {
    year: 2034,
    totalPopulation: 4383
  },
  {
    year: 2005,
    totalPopulation: 4045
  },
  {
    year: 2021,
    totalPopulation: 4725
  },
  {
    year: 2027,
    totalPopulation: 4602
  },
  {
    year: 2037,
    totalPopulation: 4277
  },
  {
    year: 2030,
    totalPopulation: 4517
  },
  {
    year: 2011,
    totalPopulation: 4320
  },
  {
    year: 2003,
    totalPopulation: 3936
  },
  {
    year: 2041,
    totalPopulation: 4119
  },
  {
    year: 2029,
    totalPopulation: 4544
  },
  {
    year: 2022,
    totalPopulation: 4703
  },
  {
    year: 2048,
    totalPopulation: 3850
  },
  {
    year: 2031,
    totalPopulation: 4487
  },
  {
    year: 2001,
    totalPopulation: 3728
  },
  {
    year: 2004,
    totalPopulation: 3984
  }
];
const Cheyenne = [
  {
    year: 1991,
    totalPopulation: 2477
  },
  {
    year: 2043,
    totalPopulation: 1620
  },
  {
    year: 2022,
    totalPopulation: 1734
  },
  {
    year: 2025,
    totalPopulation: 1743
  },
  {
    year: 2040,
    totalPopulation: 1650
  },
  {
    year: 2010,
    totalPopulation: 1834
  },
  {
    year: 2036,
    totalPopulation: 1688
  },
  {
    year: 1994,
    totalPopulation: 2297
  },
  {
    year: 2028,
    totalPopulation: 1739
  },
  {
    year: 2018,
    totalPopulation: 1786
  },
  {
    year: 2045,
    totalPopulation: 1595
  },
  {
    year: 1999,
    totalPopulation: 2276
  },
  {
    year: 2005,
    totalPopulation: 2042
  },
  {
    year: 2033,
    totalPopulation: 1708
  },
  {
    year: 2009,
    totalPopulation: 1829
  },
  {
    year: 2038,
    totalPopulation: 1668
  },
  {
    year: 2020,
    totalPopulation: 1742
  },
  {
    year: 2014,
    totalPopulation: 1813
  },
  {
    year: 2006,
    totalPopulation: 1979
  },
  {
    year: 2013,
    totalPopulation: 1816
  },
  {
    year: 2017,
    totalPopulation: 1787
  },
  {
    year: 2049,
    totalPopulation: 1546
  },
  {
    year: 1997,
    totalPopulation: 2297
  },
  {
    year: 2002,
    totalPopulation: 2164
  },
  {
    year: 2021,
    totalPopulation: 1728
  },
  {
    year: 2024,
    totalPopulation: 1732
  },
  {
    year: 2015,
    totalPopulation: 1806
  },
  {
    year: 2004,
    totalPopulation: 2058
  },
  {
    year: 1992,
    totalPopulation: 2407
  },
  {
    year: 2026,
    totalPopulation: 1746
  },
  {
    year: 1990,
    totalPopulation: 2397
  },
  {
    year: 2047,
    totalPopulation: 1572
  },
  {
    year: 1993,
    totalPopulation: 2307
  },
  {
    year: 2050,
    totalPopulation: 1537
  },
  {
    year: 1995,
    totalPopulation: 2270
  },
  {
    year: 2007,
    totalPopulation: 1911
  },
  {
    year: 2041,
    totalPopulation: 1639
  },
  {
    year: 2044,
    totalPopulation: 1606
  },
  {
    year: 2030,
    totalPopulation: 1732
  },
  {
    year: 2046,
    totalPopulation: 1584
  },
  {
    year: 2016,
    totalPopulation: 1790
  },
  {
    year: 2019,
    totalPopulation: 1777
  },
  {
    year: 2008,
    totalPopulation: 1903
  },
  {
    year: 2011,
    totalPopulation: 1833
  },
  {
    year: 1996,
    totalPopulation: 2284
  },
  {
    year: 1998,
    totalPopulation: 2340
  },
  {
    year: 2e3,
    totalPopulation: 2214
  },
  {
    year: 2003,
    totalPopulation: 2117
  },
  {
    year: 2034,
    totalPopulation: 1702
  },
  {
    year: 2048,
    totalPopulation: 1557
  },
  {
    year: 2012,
    totalPopulation: 1825
  },
  {
    year: 2035,
    totalPopulation: 1695
  },
  {
    year: 2032,
    totalPopulation: 1716
  },
  {
    year: 2037,
    totalPopulation: 1674
  },
  {
    year: 2039,
    totalPopulation: 1658
  },
  {
    year: 2023,
    totalPopulation: 1737
  },
  {
    year: 2029,
    totalPopulation: 1742
  },
  {
    year: 2042,
    totalPopulation: 1629
  },
  {
    year: 2001,
    totalPopulation: 2170
  },
  {
    year: 2027,
    totalPopulation: 1744
  },
  {
    year: 2031,
    totalPopulation: 1722
  }
];
const Kiowa = [
  {
    year: 2040,
    totalPopulation: 1327
  },
  {
    year: 2e3,
    totalPopulation: 1612
  },
  {
    year: 1990,
    totalPopulation: 1688
  },
  {
    year: 1995,
    totalPopulation: 1638
  },
  {
    year: 2046,
    totalPopulation: 1285
  },
  {
    year: 2031,
    totalPopulation: 1391
  },
  {
    year: 2029,
    totalPopulation: 1410
  },
  {
    year: 2020,
    totalPopulation: 1458
  },
  {
    year: 2003,
    totalPopulation: 1556
  },
  {
    year: 1992,
    totalPopulation: 1700
  },
  {
    year: 1996,
    totalPopulation: 1662
  },
  {
    year: 2041,
    totalPopulation: 1321
  },
  {
    year: 2028,
    totalPopulation: 1419
  },
  {
    year: 2050,
    totalPopulation: 1260
  },
  {
    year: 2018,
    totalPopulation: 1441
  },
  {
    year: 2042,
    totalPopulation: 1315
  },
  {
    year: 1998,
    totalPopulation: 1655
  },
  {
    year: 2023,
    totalPopulation: 1454
  },
  {
    year: 2010,
    totalPopulation: 1399
  },
  {
    year: 2007,
    totalPopulation: 1472
  },
  {
    year: 2011,
    totalPopulation: 1380
  },
  {
    year: 2045,
    totalPopulation: 1287
  },
  {
    year: 2025,
    totalPopulation: 1442
  },
  {
    year: 2048,
    totalPopulation: 1273
  },
  {
    year: 1993,
    totalPopulation: 1700
  },
  {
    year: 1999,
    totalPopulation: 1626
  },
  {
    year: 2021,
    totalPopulation: 1462
  },
  {
    year: 2006,
    totalPopulation: 1517
  },
  {
    year: 2015,
    totalPopulation: 1406
  },
  {
    year: 1997,
    totalPopulation: 1660
  },
  {
    year: 2047,
    totalPopulation: 1281
  },
  {
    year: 2034,
    totalPopulation: 1373
  },
  {
    year: 2008,
    totalPopulation: 1430
  },
  {
    year: 2022,
    totalPopulation: 1453
  },
  {
    year: 2019,
    totalPopulation: 1457
  },
  {
    year: 2043,
    totalPopulation: 1306
  },
  {
    year: 2030,
    totalPopulation: 1407
  },
  {
    year: 2009,
    totalPopulation: 1393
  },
  {
    year: 2032,
    totalPopulation: 1387
  },
  {
    year: 2024,
    totalPopulation: 1450
  },
  {
    year: 2004,
    totalPopulation: 1527
  },
  {
    year: 2013,
    totalPopulation: 1400
  },
  {
    year: 1991,
    totalPopulation: 1682
  },
  {
    year: 2035,
    totalPopulation: 1365
  },
  {
    year: 2012,
    totalPopulation: 1381
  },
  {
    year: 2005,
    totalPopulation: 1540
  },
  {
    year: 2016,
    totalPopulation: 1424
  },
  {
    year: 2039,
    totalPopulation: 1337
  },
  {
    year: 2026,
    totalPopulation: 1433
  },
  {
    year: 1994,
    totalPopulation: 1698
  },
  {
    year: 2002,
    totalPopulation: 1566
  },
  {
    year: 2036,
    totalPopulation: 1363
  },
  {
    year: 2049,
    totalPopulation: 1266
  },
  {
    year: 2044,
    totalPopulation: 1292
  },
  {
    year: 2033,
    totalPopulation: 1383
  },
  {
    year: 2027,
    totalPopulation: 1429
  },
  {
    year: 2001,
    totalPopulation: 1607
  },
  {
    year: 2037,
    totalPopulation: 1357
  },
  {
    year: 2038,
    totalPopulation: 1347
  },
  {
    year: 2017,
    totalPopulation: 1424
  },
  {
    year: 2014,
    totalPopulation: 1397
  }
];
const Delta = [
  {
    year: 2030,
    totalPopulation: 33057
  },
  {
    year: 2002,
    totalPopulation: 28776
  },
  {
    year: 2023,
    totalPopulation: 31336
  },
  {
    year: 2016,
    totalPopulation: 30490
  },
  {
    year: 2009,
    totalPopulation: 30628
  },
  {
    year: 2049,
    totalPopulation: 36228
  },
  {
    year: 1996,
    totalPopulation: 25718
  },
  {
    year: 2045,
    totalPopulation: 35815
  },
  {
    year: 2021,
    totalPopulation: 31083
  },
  {
    year: 2048,
    totalPopulation: 36142
  },
  {
    year: 2046,
    totalPopulation: 35931
  },
  {
    year: 2028,
    totalPopulation: 32522
  },
  {
    year: 2037,
    totalPopulation: 34615
  },
  {
    year: 2008,
    totalPopulation: 30340
  },
  {
    year: 1997,
    totalPopulation: 26001
  },
  {
    year: 2012,
    totalPopulation: 30554
  },
  {
    year: 1990,
    totalPopulation: 20980
  },
  {
    year: 2019,
    totalPopulation: 31235
  },
  {
    year: 2043,
    totalPopulation: 35570
  },
  {
    year: 2047,
    totalPopulation: 36037
  },
  {
    year: 2041,
    totalPopulation: 35291
  },
  {
    year: 2013,
    totalPopulation: 30425
  },
  {
    year: 2039,
    totalPopulation: 34962
  },
  {
    year: 2035,
    totalPopulation: 34224
  },
  {
    year: 2005,
    totalPopulation: 29409
  },
  {
    year: 2040,
    totalPopulation: 35128
  },
  {
    year: 1998,
    totalPopulation: 26827
  },
  {
    year: 2032,
    totalPopulation: 33557
  },
  {
    year: 2010,
    totalPopulation: 30889
  },
  {
    year: 2029,
    totalPopulation: 32802
  },
  {
    year: 2004,
    totalPopulation: 29452
  },
  {
    year: 2027,
    totalPopulation: 32253
  },
  {
    year: 2044,
    totalPopulation: 35696
  },
  {
    year: 2001,
    totalPopulation: 28388
  },
  {
    year: 2003,
    totalPopulation: 29067
  },
  {
    year: 2026,
    totalPopulation: 31964
  },
  {
    year: 2031,
    totalPopulation: 33313
  },
  {
    year: 2024,
    totalPopulation: 31484
  },
  {
    year: 2033,
    totalPopulation: 33789
  },
  {
    year: 2e3,
    totalPopulation: 27910
  },
  {
    year: 2042,
    totalPopulation: 35430
  },
  {
    year: 2034,
    totalPopulation: 34012
  },
  {
    year: 2014,
    totalPopulation: 30065
  },
  {
    year: 2018,
    totalPopulation: 31035
  },
  {
    year: 2015,
    totalPopulation: 30039
  },
  {
    year: 2011,
    totalPopulation: 30435
  },
  {
    year: 2036,
    totalPopulation: 34415
  },
  {
    year: 1991,
    totalPopulation: 21227
  },
  {
    year: 1994,
    totalPopulation: 24343
  },
  {
    year: 1993,
    totalPopulation: 23237
  },
  {
    year: 2050,
    totalPopulation: 36316
  },
  {
    year: 2022,
    totalPopulation: 31180
  },
  {
    year: 2020,
    totalPopulation: 31159
  },
  {
    year: 1995,
    totalPopulation: 25193
  },
  {
    year: 2017,
    totalPopulation: 30706
  },
  {
    year: 1992,
    totalPopulation: 21870
  },
  {
    year: 2006,
    totalPopulation: 29705
  },
  {
    year: 2007,
    totalPopulation: 29872
  },
  {
    year: 2038,
    totalPopulation: 34792
  },
  {
    year: 2025,
    totalPopulation: 31678
  },
  {
    year: 1999,
    totalPopulation: 27408
  }
];
const Crowley = [
  {
    year: 2009,
    totalPopulation: 5800
  },
  {
    year: 2033,
    totalPopulation: 6075
  },
  {
    year: 2044,
    totalPopulation: 6175
  },
  {
    year: 1999,
    totalPopulation: 5002
  },
  {
    year: 1990,
    totalPopulation: 3946
  },
  {
    year: 2030,
    totalPopulation: 6039
  },
  {
    year: 2025,
    totalPopulation: 5964
  },
  {
    year: 2035,
    totalPopulation: 6092
  },
  {
    year: 2010,
    totalPopulation: 5838
  },
  {
    year: 2020,
    totalPopulation: 5840
  },
  {
    year: 2049,
    totalPopulation: 6221
  },
  {
    year: 2026,
    totalPopulation: 5985
  },
  {
    year: 2017,
    totalPopulation: 5832
  },
  {
    year: 2045,
    totalPopulation: 6181
  },
  {
    year: 2008,
    totalPopulation: 5890
  },
  {
    year: 2037,
    totalPopulation: 6112
  },
  {
    year: 2e3,
    totalPopulation: 5128
  },
  {
    year: 2003,
    totalPopulation: 5161
  },
  {
    year: 1995,
    totalPopulation: 4220
  },
  {
    year: 2015,
    totalPopulation: 5840
  },
  {
    year: 2043,
    totalPopulation: 6158
  },
  {
    year: 2018,
    totalPopulation: 5839
  },
  {
    year: 2024,
    totalPopulation: 5927
  },
  {
    year: 2019,
    totalPopulation: 5843
  },
  {
    year: 2016,
    totalPopulation: 5838
  },
  {
    year: 2029,
    totalPopulation: 6033
  },
  {
    year: 2027,
    totalPopulation: 6010
  },
  {
    year: 1992,
    totalPopulation: 4140
  },
  {
    year: 1998,
    totalPopulation: 4283
  },
  {
    year: 2048,
    totalPopulation: 6211
  },
  {
    year: 2036,
    totalPopulation: 6105
  },
  {
    year: 2012,
    totalPopulation: 5838
  },
  {
    year: 2005,
    totalPopulation: 5436
  },
  {
    year: 2011,
    totalPopulation: 5831
  },
  {
    year: 2040,
    totalPopulation: 6140
  },
  {
    year: 2006,
    totalPopulation: 5708
  },
  {
    year: 2028,
    totalPopulation: 6022
  },
  {
    year: 2023,
    totalPopulation: 5904
  },
  {
    year: 2022,
    totalPopulation: 5882
  },
  {
    year: 1996,
    totalPopulation: 4262
  },
  {
    year: 2047,
    totalPopulation: 6203
  },
  {
    year: 2021,
    totalPopulation: 5861
  },
  {
    year: 1991,
    totalPopulation: 3974
  },
  {
    year: 2001,
    totalPopulation: 5249
  },
  {
    year: 1993,
    totalPopulation: 4140
  },
  {
    year: 2013,
    totalPopulation: 5847
  },
  {
    year: 1997,
    totalPopulation: 4299
  },
  {
    year: 2042,
    totalPopulation: 6158
  },
  {
    year: 2007,
    totalPopulation: 5911
  },
  {
    year: 2002,
    totalPopulation: 5349
  },
  {
    year: 2034,
    totalPopulation: 6079
  },
  {
    year: 2014,
    totalPopulation: 5841
  },
  {
    year: 2046,
    totalPopulation: 6187
  },
  {
    year: 2050,
    totalPopulation: 6225
  },
  {
    year: 2039,
    totalPopulation: 6133
  },
  {
    year: 2031,
    totalPopulation: 6047
  },
  {
    year: 2004,
    totalPopulation: 5435
  },
  {
    year: 2041,
    totalPopulation: 6144
  },
  {
    year: 1994,
    totalPopulation: 4213
  },
  {
    year: 2032,
    totalPopulation: 6059
  },
  {
    year: 2038,
    totalPopulation: 6117
  }
];
const Fremont = [
  {
    year: 2049,
    totalPopulation: 51911
  },
  {
    year: 2011,
    totalPopulation: 47075
  },
  {
    year: 2016,
    totalPopulation: 47286
  },
  {
    year: 2045,
    totalPopulation: 51359
  },
  {
    year: 2043,
    totalPopulation: 51100
  },
  {
    year: 2004,
    totalPopulation: 46537
  },
  {
    year: 2026,
    totalPopulation: 48942
  },
  {
    year: 2038,
    totalPopulation: 50473
  },
  {
    year: 2035,
    totalPopulation: 50079
  },
  {
    year: 1993,
    totalPopulation: 36504
  },
  {
    year: 2025,
    totalPopulation: 48871
  },
  {
    year: 2027,
    totalPopulation: 49009
  },
  {
    year: 2007,
    totalPopulation: 46662
  },
  {
    year: 2005,
    totalPopulation: 46448
  },
  {
    year: 1995,
    totalPopulation: 40520
  },
  {
    year: 2033,
    totalPopulation: 49793
  },
  {
    year: 2006,
    totalPopulation: 46702
  },
  {
    year: 2024,
    totalPopulation: 48874
  },
  {
    year: 2047,
    totalPopulation: 51633
  },
  {
    year: 2031,
    totalPopulation: 49511
  },
  {
    year: 2034,
    totalPopulation: 49935
  },
  {
    year: 2015,
    totalPopulation: 47213
  },
  {
    year: 2050,
    totalPopulation: 52053
  },
  {
    year: 2042,
    totalPopulation: 50974
  },
  {
    year: 2028,
    totalPopulation: 49085
  },
  {
    year: 1992,
    totalPopulation: 33818
  },
  {
    year: 2020,
    totalPopulation: 48883
  },
  {
    year: 2029,
    totalPopulation: 49204
  },
  {
    year: 2e3,
    totalPopulation: 46369
  },
  {
    year: 2021,
    totalPopulation: 48973
  },
  {
    year: 2017,
    totalPopulation: 47574
  },
  {
    year: 1999,
    totalPopulation: 45135
  },
  {
    year: 2003,
    totalPopulation: 46825
  },
  {
    year: 2008,
    totalPopulation: 46777
  },
  {
    year: 2019,
    totalPopulation: 48382
  },
  {
    year: 2044,
    totalPopulation: 51232
  },
  {
    year: 1990,
    totalPopulation: 32221
  },
  {
    year: 2036,
    totalPopulation: 50223
  },
  {
    year: 2002,
    totalPopulation: 46971
  },
  {
    year: 2023,
    totalPopulation: 48895
  },
  {
    year: 2048,
    totalPopulation: 51765
  },
  {
    year: 2040,
    totalPopulation: 50729
  },
  {
    year: 2018,
    totalPopulation: 47988
  },
  {
    year: 2014,
    totalPopulation: 47116
  },
  {
    year: 2039,
    totalPopulation: 50596
  },
  {
    year: 2041,
    totalPopulation: 50851
  },
  {
    year: 1994,
    totalPopulation: 38711
  },
  {
    year: 2009,
    totalPopulation: 46637
  },
  {
    year: 2032,
    totalPopulation: 49653
  },
  {
    year: 2022,
    totalPopulation: 48927
  },
  {
    year: 2037,
    totalPopulation: 50340
  },
  {
    year: 2013,
    totalPopulation: 47181
  },
  {
    year: 1997,
    totalPopulation: 42854
  },
  {
    year: 2046,
    totalPopulation: 51492
  },
  {
    year: 1991,
    totalPopulation: 32236
  },
  {
    year: 2012,
    totalPopulation: 47130
  },
  {
    year: 2010,
    totalPopulation: 46854
  },
  {
    year: 1998,
    totalPopulation: 43817
  },
  {
    year: 2001,
    totalPopulation: 46738
  },
  {
    year: 2030,
    totalPopulation: 49350
  },
  {
    year: 1996,
    totalPopulation: 41831
  }
];
const Garfield = [
  {
    year: 2010,
    totalPopulation: 56150
  },
  {
    year: 2023,
    totalPopulation: 63991
  },
  {
    year: 2049,
    totalPopulation: 94242
  },
  {
    year: 2024,
    totalPopulation: 64873
  },
  {
    year: 2031,
    totalPopulation: 73212
  },
  {
    year: 2e3,
    totalPopulation: 44239
  },
  {
    year: 2008,
    totalPopulation: 54228
  },
  {
    year: 2005,
    totalPopulation: 49261
  },
  {
    year: 2033,
    totalPopulation: 75917
  },
  {
    year: 2011,
    totalPopulation: 56271
  },
  {
    year: 2015,
    totalPopulation: 57498
  },
  {
    year: 1993,
    totalPopulation: 32579
  },
  {
    year: 2027,
    totalPopulation: 68001
  },
  {
    year: 2032,
    totalPopulation: 74564
  },
  {
    year: 2042,
    totalPopulation: 87730
  },
  {
    year: 2044,
    totalPopulation: 89952
  },
  {
    year: 2026,
    totalPopulation: 66882
  },
  {
    year: 2003,
    totalPopulation: 47483
  },
  {
    year: 1997,
    totalPopulation: 38887
  },
  {
    year: 2013,
    totalPopulation: 56801
  },
  {
    year: 2018,
    totalPopulation: 59770
  },
  {
    year: 2035,
    totalPopulation: 78609
  },
  {
    year: 2028,
    totalPopulation: 69224
  },
  {
    year: 2048,
    totalPopulation: 93539
  },
  {
    year: 2020,
    totalPopulation: 61724
  },
  {
    year: 2041,
    totalPopulation: 86514
  },
  {
    year: 2030,
    totalPopulation: 71854
  },
  {
    year: 2012,
    totalPopulation: 56418
  },
  {
    year: 2019,
    totalPopulation: 60559
  },
  {
    year: 2004,
    totalPopulation: 48159
  },
  {
    year: 1995,
    totalPopulation: 36417
  },
  {
    year: 2002,
    totalPopulation: 46728
  },
  {
    year: 2050,
    totalPopulation: 94890
  },
  {
    year: 2006,
    totalPopulation: 51106
  },
  {
    year: 2045,
    totalPopulation: 90958
  },
  {
    year: 2039,
    totalPopulation: 83927
  },
  {
    year: 2036,
    totalPopulation: 79957
  },
  {
    year: 2022,
    totalPopulation: 63121
  },
  {
    year: 2007,
    totalPopulation: 52677
  },
  {
    year: 2017,
    totalPopulation: 58870
  },
  {
    year: 2046,
    totalPopulation: 91887
  },
  {
    year: 1998,
    totalPopulation: 41225
  },
  {
    year: 2037,
    totalPopulation: 81285
  },
  {
    year: 2014,
    totalPopulation: 57135
  },
  {
    year: 2029,
    totalPopulation: 70506
  },
  {
    year: 1992,
    totalPopulation: 31348
  },
  {
    year: 2043,
    totalPopulation: 88879
  },
  {
    year: 2009,
    totalPopulation: 55401
  },
  {
    year: 1991,
    totalPopulation: 31228
  },
  {
    year: 2047,
    totalPopulation: 92745
  },
  {
    year: 2034,
    totalPopulation: 77270
  },
  {
    year: 2025,
    totalPopulation: 65827
  },
  {
    year: 1990,
    totalPopulation: 30149
  },
  {
    year: 1994,
    totalPopulation: 34496
  },
  {
    year: 2016,
    totalPopulation: 58162
  },
  {
    year: 2038,
    totalPopulation: 82607
  },
  {
    year: 2001,
    totalPopulation: 45909
  },
  {
    year: 1999,
    totalPopulation: 42694
  },
  {
    year: 2021,
    totalPopulation: 62336
  },
  {
    year: 1996,
    totalPopulation: 37678
  },
  {
    year: 2040,
    totalPopulation: 85224
  }
];
const Routt = [
  {
    year: 2048,
    totalPopulation: 35909
  },
  {
    year: 2033,
    totalPopulation: 30564
  },
  {
    year: 2004,
    totalPopulation: 21292
  },
  {
    year: 2050,
    totalPopulation: 36379
  },
  {
    year: 2015,
    totalPopulation: 23823
  },
  {
    year: 2021,
    totalPopulation: 24727
  },
  {
    year: 2022,
    totalPopulation: 25069
  },
  {
    year: 2001,
    totalPopulation: 20430
  },
  {
    year: 1998,
    totalPopulation: 18605
  },
  {
    year: 1995,
    totalPopulation: 17257
  },
  {
    year: 2032,
    totalPopulation: 30104
  },
  {
    year: 2025,
    totalPopulation: 26583
  },
  {
    year: 2039,
    totalPopulation: 33088
  },
  {
    year: 2026,
    totalPopulation: 27117
  },
  {
    year: 2036,
    totalPopulation: 31889
  },
  {
    year: 2e3,
    totalPopulation: 20122
  },
  {
    year: 2020,
    totalPopulation: 24836
  },
  {
    year: 2008,
    totalPopulation: 22934
  },
  {
    year: 2019,
    totalPopulation: 24518
  },
  {
    year: 2047,
    totalPopulation: 35655
  },
  {
    year: 2038,
    totalPopulation: 32703
  },
  {
    year: 2013,
    totalPopulation: 23576
  },
  {
    year: 2027,
    totalPopulation: 27630
  },
  {
    year: 2040,
    totalPopulation: 33461
  },
  {
    year: 2011,
    totalPopulation: 23481
  },
  {
    year: 2010,
    totalPopulation: 23439
  },
  {
    year: 2005,
    totalPopulation: 21456
  },
  {
    year: 1999,
    totalPopulation: 19232
  },
  {
    year: 1997,
    totalPopulation: 18119
  },
  {
    year: 2003,
    totalPopulation: 21125
  },
  {
    year: 2018,
    totalPopulation: 24312
  },
  {
    year: 1993,
    totalPopulation: 15925
  },
  {
    year: 1994,
    totalPopulation: 16619
  },
  {
    year: 2046,
    totalPopulation: 35386
  },
  {
    year: 1996,
    totalPopulation: 17719
  },
  {
    year: 2041,
    totalPopulation: 33819
  },
  {
    year: 2007,
    totalPopulation: 22410
  },
  {
    year: 2006,
    totalPopulation: 21889
  },
  {
    year: 2012,
    totalPopulation: 23530
  },
  {
    year: 2016,
    totalPopulation: 23951
  },
  {
    year: 1991,
    totalPopulation: 14729
  },
  {
    year: 2028,
    totalPopulation: 28138
  },
  {
    year: 2009,
    totalPopulation: 23325
  },
  {
    year: 2045,
    totalPopulation: 35102
  },
  {
    year: 2030,
    totalPopulation: 29138
  },
  {
    year: 2042,
    totalPopulation: 34160
  },
  {
    year: 2043,
    totalPopulation: 34495
  },
  {
    year: 2044,
    totalPopulation: 34809
  },
  {
    year: 2031,
    totalPopulation: 29624
  },
  {
    year: 2023,
    totalPopulation: 25522
  },
  {
    year: 2017,
    totalPopulation: 24169
  },
  {
    year: 2037,
    totalPopulation: 32303
  },
  {
    year: 2002,
    totalPopulation: 20893
  },
  {
    year: 2049,
    totalPopulation: 36155
  },
  {
    year: 2035,
    totalPopulation: 31460
  },
  {
    year: 2034,
    totalPopulation: 31024
  },
  {
    year: 1992,
    totalPopulation: 15153
  },
  {
    year: 1990,
    totalPopulation: 14169
  },
  {
    year: 2024,
    totalPopulation: 26057
  },
  {
    year: 2029,
    totalPopulation: 28641
  },
  {
    year: 2014,
    totalPopulation: 23661
  }
];
const Denver = [
  {
    year: 2007,
    totalPopulation: 570438
  },
  {
    year: 2e3,
    totalPopulation: 556740
  },
  {
    year: 2030,
    totalPopulation: 802309
  },
  {
    year: 2027,
    totalPopulation: 778168
  },
  {
    year: 2022,
    totalPopulation: 733279
  },
  {
    year: 2015,
    totalPopulation: 675533
  },
  {
    year: 2005,
    totalPopulation: 559459
  },
  {
    year: 1997,
    totalPopulation: 527442
  },
  {
    year: 2001,
    totalPopulation: 563301
  },
  {
    year: 2021,
    totalPopulation: 725107
  },
  {
    year: 1990,
    totalPopulation: 467856
  },
  {
    year: 2010,
    totalPopulation: 604879
  },
  {
    year: 2047,
    totalPopulation: 856478
  },
  {
    year: 2046,
    totalPopulation: 858041
  },
  {
    year: 2028,
    totalPopulation: 786361
  },
  {
    year: 2029,
    totalPopulation: 794411
  },
  {
    year: 2043,
    totalPopulation: 862312
  },
  {
    year: 2025,
    totalPopulation: 761529
  },
  {
    year: 2016,
    totalPopulation: 686469
  },
  {
    year: 2011,
    totalPopulation: 620228
  },
  {
    year: 2009,
    totalPopulation: 595575
  },
  {
    year: 2008,
    totalPopulation: 581905
  },
  {
    year: 2042,
    totalPopulation: 862412
  },
  {
    year: 2032,
    totalPopulation: 817349
  },
  {
    year: 2026,
    totalPopulation: 769878
  },
  {
    year: 2031,
    totalPopulation: 810045
  },
  {
    year: 2003,
    totalPopulation: 560350
  },
  {
    year: 2049,
    totalPopulation: 853304
  },
  {
    year: 2006,
    totalPopulation: 562863
  },
  {
    year: 2002,
    totalPopulation: 559088
  },
  {
    year: 2014,
    totalPopulation: 658632
  },
  {
    year: 2044,
    totalPopulation: 860995
  },
  {
    year: 1996,
    totalPopulation: 518260
  },
  {
    year: 2050,
    totalPopulation: 850636
  },
  {
    year: 2004,
    totalPopulation: 560225
  },
  {
    year: 2017,
    totalPopulation: 693135
  },
  {
    year: 1994,
    totalPopulation: 504252
  },
  {
    year: 2034,
    totalPopulation: 830557
  },
  {
    year: 2024,
    totalPopulation: 752764
  },
  {
    year: 2023,
    totalPopulation: 743932
  },
  {
    year: 1992,
    totalPopulation: 488265
  },
  {
    year: 2041,
    totalPopulation: 861303
  },
  {
    year: 2019,
    totalPopulation: 710137
  },
  {
    year: 2033,
    totalPopulation: 824162
  },
  {
    year: 2045,
    totalPopulation: 859564
  },
  {
    year: 2048,
    totalPopulation: 854896
  },
  {
    year: 2020,
    totalPopulation: 717627
  },
  {
    year: 2037,
    totalPopulation: 847040
  },
  {
    year: 1991,
    totalPopulation: 475184
  },
  {
    year: 2036,
    totalPopulation: 842003
  },
  {
    year: 1998,
    totalPopulation: 533409
  },
  {
    year: 2038,
    totalPopulation: 851628
  },
  {
    year: 2013,
    totalPopulation: 645303
  },
  {
    year: 2012,
    totalPopulation: 632922
  },
  {
    year: 2039,
    totalPopulation: 855784
  },
  {
    year: 1995,
    totalPopulation: 507720
  },
  {
    year: 1993,
    totalPopulation: 501336
  },
  {
    year: 2040,
    totalPopulation: 859004
  },
  {
    year: 1999,
    totalPopulation: 545515
  },
  {
    year: 2018,
    totalPopulation: 702680
  },
  {
    year: 2035,
    totalPopulation: 836496
  }
];
const Morgan = [
  {
    year: 1996,
    totalPopulation: 26048
  },
  {
    year: 2015,
    totalPopulation: 28339
  },
  {
    year: 2008,
    totalPopulation: 27742
  },
  {
    year: 2041,
    totalPopulation: 33666
  },
  {
    year: 2045,
    totalPopulation: 34301
  },
  {
    year: 2026,
    totalPopulation: 30386
  },
  {
    year: 2009,
    totalPopulation: 28027
  },
  {
    year: 2037,
    totalPopulation: 32908
  },
  {
    year: 2034,
    totalPopulation: 32270
  },
  {
    year: 1991,
    totalPopulation: 22703
  },
  {
    year: 2048,
    totalPopulation: 34767
  },
  {
    year: 2001,
    totalPopulation: 27473
  },
  {
    year: 2046,
    totalPopulation: 34456
  },
  {
    year: 1993,
    totalPopulation: 24238
  },
  {
    year: 2028,
    totalPopulation: 30870
  },
  {
    year: 2022,
    totalPopulation: 29361
  },
  {
    year: 2003,
    totalPopulation: 27852
  },
  {
    year: 2050,
    totalPopulation: 35086
  },
  {
    year: 2044,
    totalPopulation: 34150
  },
  {
    year: 2016,
    totalPopulation: 28288
  },
  {
    year: 2005,
    totalPopulation: 27949
  },
  {
    year: 2040,
    totalPopulation: 33485
  },
  {
    year: 2018,
    totalPopulation: 28936
  },
  {
    year: 2010,
    totalPopulation: 28196
  },
  {
    year: 2039,
    totalPopulation: 33301
  },
  {
    year: 2036,
    totalPopulation: 32700
  },
  {
    year: 1994,
    totalPopulation: 25078
  },
  {
    year: 2011,
    totalPopulation: 28427
  },
  {
    year: 2030,
    totalPopulation: 31355
  },
  {
    year: 2006,
    totalPopulation: 27983
  },
  {
    year: 2032,
    totalPopulation: 31820
  },
  {
    year: 2002,
    totalPopulation: 27663
  },
  {
    year: 2e3,
    totalPopulation: 27250
  },
  {
    year: 2042,
    totalPopulation: 33835
  },
  {
    year: 2013,
    totalPopulation: 28250
  },
  {
    year: 2024,
    totalPopulation: 29882
  },
  {
    year: 2049,
    totalPopulation: 34925
  },
  {
    year: 1998,
    totalPopulation: 26666
  },
  {
    year: 2033,
    totalPopulation: 32047
  },
  {
    year: 2021,
    totalPopulation: 29081
  },
  {
    year: 2007,
    totalPopulation: 27849
  },
  {
    year: 2019,
    totalPopulation: 29131
  },
  {
    year: 2047,
    totalPopulation: 34613
  },
  {
    year: 1992,
    totalPopulation: 23486
  },
  {
    year: 2025,
    totalPopulation: 30129
  },
  {
    year: 1995,
    totalPopulation: 25367
  },
  {
    year: 1997,
    totalPopulation: 26650
  },
  {
    year: 1990,
    totalPopulation: 22073
  },
  {
    year: 2017,
    totalPopulation: 28424
  },
  {
    year: 2027,
    totalPopulation: 30625
  },
  {
    year: 2012,
    totalPopulation: 28249
  },
  {
    year: 2004,
    totalPopulation: 27915
  },
  {
    year: 2020,
    totalPopulation: 29101
  },
  {
    year: 2029,
    totalPopulation: 31116
  },
  {
    year: 2023,
    totalPopulation: 29610
  },
  {
    year: 2043,
    totalPopulation: 33992
  },
  {
    year: 2014,
    totalPopulation: 28165
  },
  {
    year: 2035,
    totalPopulation: 32489
  },
  {
    year: 2031,
    totalPopulation: 31588
  },
  {
    year: 1999,
    totalPopulation: 26954
  },
  {
    year: 2038,
    totalPopulation: 33113
  }
];
const Alamosa = [
  {
    year: 2002,
    totalPopulation: 15271
  },
  {
    year: 2050,
    totalPopulation: 17142
  },
  {
    year: 2014,
    totalPopulation: 15792
  },
  {
    year: 2006,
    totalPopulation: 15353
  },
  {
    year: 2039,
    totalPopulation: 17057
  },
  {
    year: 1998,
    totalPopulation: 14621
  },
  {
    year: 1997,
    totalPopulation: 14478
  },
  {
    year: 2018,
    totalPopulation: 16183
  },
  {
    year: 2023,
    totalPopulation: 16598
  },
  {
    year: 1991,
    totalPopulation: 13641
  },
  {
    year: 2049,
    totalPopulation: 17143
  },
  {
    year: 2010,
    totalPopulation: 15474
  },
  {
    year: 2013,
    totalPopulation: 15714
  },
  {
    year: 2031,
    totalPopulation: 16844
  },
  {
    year: 2020,
    totalPopulation: 16326
  },
  {
    year: 2042,
    totalPopulation: 17107
  },
  {
    year: 2047,
    totalPopulation: 17142
  },
  {
    year: 2017,
    totalPopulation: 16053
  },
  {
    year: 2038,
    totalPopulation: 17032
  },
  {
    year: 2001,
    totalPopulation: 15230
  },
  {
    year: 2033,
    totalPopulation: 16896
  },
  {
    year: 2015,
    totalPopulation: 15887
  },
  {
    year: 1994,
    totalPopulation: 13826
  },
  {
    year: 2026,
    totalPopulation: 16692
  },
  {
    year: 2046,
    totalPopulation: 17138
  },
  {
    year: 2012,
    totalPopulation: 15606
  },
  {
    year: 2027,
    totalPopulation: 16717
  },
  {
    year: 2008,
    totalPopulation: 15345
  },
  {
    year: 2028,
    totalPopulation: 16746
  },
  {
    year: 2022,
    totalPopulation: 16520
  },
  {
    year: 2024,
    totalPopulation: 16634
  },
  {
    year: 2029,
    totalPopulation: 16782
  },
  {
    year: 2025,
    totalPopulation: 16661
  },
  {
    year: 2036,
    totalPopulation: 16983
  },
  {
    year: 1996,
    totalPopulation: 14319
  },
  {
    year: 1993,
    totalPopulation: 13656
  },
  {
    year: 2011,
    totalPopulation: 15525
  },
  {
    year: 2037,
    totalPopulation: 17009
  },
  {
    year: 2003,
    totalPopulation: 15358
  },
  {
    year: 2009,
    totalPopulation: 15305
  },
  {
    year: 2021,
    totalPopulation: 16424
  },
  {
    year: 2035,
    totalPopulation: 16955
  },
  {
    year: 1999,
    totalPopulation: 14825
  },
  {
    year: 1990,
    totalPopulation: 13617
  },
  {
    year: 1995,
    totalPopulation: 14103
  },
  {
    year: 2040,
    totalPopulation: 17073
  },
  {
    year: 2032,
    totalPopulation: 16863
  },
  {
    year: 2043,
    totalPopulation: 17115
  },
  {
    year: 2019,
    totalPopulation: 16244
  },
  {
    year: 1992,
    totalPopulation: 13572
  },
  {
    year: 2048,
    totalPopulation: 17143
  },
  {
    year: 2004,
    totalPopulation: 15412
  },
  {
    year: 2045,
    totalPopulation: 17135
  },
  {
    year: 2005,
    totalPopulation: 15391
  },
  {
    year: 2e3,
    totalPopulation: 15097
  },
  {
    year: 2016,
    totalPopulation: 15934
  },
  {
    year: 2044,
    totalPopulation: 17123
  },
  {
    year: 2030,
    totalPopulation: 16810
  },
  {
    year: 2007,
    totalPopulation: 15294
  },
  {
    year: 2041,
    totalPopulation: 17094
  },
  {
    year: 2034,
    totalPopulation: 16926
  }
];
const Douglas = [
  {
    year: 2013,
    totalPopulation: 306329
  },
  {
    year: 2038,
    totalPopulation: 448396
  },
  {
    year: 2020,
    totalPopulation: 360034
  },
  {
    year: 2035,
    totalPopulation: 438460
  },
  {
    year: 2049,
    totalPopulation: 466227
  },
  {
    year: 2014,
    totalPopulation: 314613
  },
  {
    year: 2041,
    totalPopulation: 456121
  },
  {
    year: 2012,
    totalPopulation: 298735
  },
  {
    year: 2023,
    totalPopulation: 378976
  },
  {
    year: 2034,
    totalPopulation: 434710
  },
  {
    year: 2002,
    totalPopulation: 209706
  },
  {
    year: 1990,
    totalPopulation: 61562
  },
  {
    year: 2010,
    totalPopulation: 287124
  },
  {
    year: 2027,
    totalPopulation: 401709
  },
  {
    year: 1998,
    totalPopulation: 144352
  },
  {
    year: 2030,
    totalPopulation: 417107
  },
  {
    year: 2036,
    totalPopulation: 442004
  },
  {
    year: 2e3,
    totalPopulation: 180511
  },
  {
    year: 2045,
    totalPopulation: 462852
  },
  {
    year: 2008,
    totalPopulation: 276743
  },
  {
    year: 2044,
    totalPopulation: 461524
  },
  {
    year: 2042,
    totalPopulation: 458176
  },
  {
    year: 2015,
    totalPopulation: 322083
  },
  {
    year: 2032,
    totalPopulation: 426544
  },
  {
    year: 1999,
    totalPopulation: 162324
  },
  {
    year: 2046,
    totalPopulation: 463970
  },
  {
    year: 2017,
    totalPopulation: 335938
  },
  {
    year: 2001,
    totalPopulation: 199035
  },
  {
    year: 1991,
    totalPopulation: 66688
  },
  {
    year: 2003,
    totalPopulation: 221146
  },
  {
    year: 2018,
    totalPopulation: 343262
  },
  {
    year: 2006,
    totalPopulation: 257832
  },
  {
    year: 2011,
    totalPopulation: 292623
  },
  {
    year: 1996,
    totalPopulation: 114713
  },
  {
    year: 2021,
    totalPopulation: 368862
  },
  {
    year: 1994,
    totalPopulation: 92530
  },
  {
    year: 2048,
    totalPopulation: 465643
  },
  {
    year: 1997,
    totalPopulation: 129329
  },
  {
    year: 2040,
    totalPopulation: 453812
  },
  {
    year: 2050,
    totalPopulation: 466672
  },
  {
    year: 2043,
    totalPopulation: 459972
  },
  {
    year: 2005,
    totalPopulation: 244445
  },
  {
    year: 1995,
    totalPopulation: 103836
  },
  {
    year: 2009,
    totalPopulation: 282161
  },
  {
    year: 2022,
    totalPopulation: 373735
  },
  {
    year: 1992,
    totalPopulation: 75360
  },
  {
    year: 2033,
    totalPopulation: 430817
  },
  {
    year: 2029,
    totalPopulation: 412154
  },
  {
    year: 2026,
    totalPopulation: 396426
  },
  {
    year: 1993,
    totalPopulation: 83128
  },
  {
    year: 2037,
    totalPopulation: 445318
  },
  {
    year: 2024,
    totalPopulation: 384634
  },
  {
    year: 2004,
    totalPopulation: 233644
  },
  {
    year: 2007,
    totalPopulation: 268597
  },
  {
    year: 2016,
    totalPopulation: 328338
  },
  {
    year: 2039,
    totalPopulation: 451234
  },
  {
    year: 2028,
    totalPopulation: 406966
  },
  {
    year: 2031,
    totalPopulation: 421908
  },
  {
    year: 2047,
    totalPopulation: 464889
  },
  {
    year: 2025,
    totalPopulation: 391023
  },
  {
    year: 2019,
    totalPopulation: 351208
  }
];
const Mineral = [
  {
    year: 2016,
    totalPopulation: 771
  },
  {
    year: 2015,
    totalPopulation: 750
  },
  {
    year: 2031,
    totalPopulation: 925
  },
  {
    year: 2024,
    totalPopulation: 915
  },
  {
    year: 2003,
    totalPopulation: 829
  },
  {
    year: 2e3,
    totalPopulation: 836
  },
  {
    year: 2043,
    totalPopulation: 903
  },
  {
    year: 2037,
    totalPopulation: 908
  },
  {
    year: 1991,
    totalPopulation: 571
  },
  {
    year: 2010,
    totalPopulation: 705
  },
  {
    year: 2034,
    totalPopulation: 920
  },
  {
    year: 2002,
    totalPopulation: 806
  },
  {
    year: 1997,
    totalPopulation: 745
  },
  {
    year: 2032,
    totalPopulation: 921
  },
  {
    year: 2011,
    totalPopulation: 703
  },
  {
    year: 1996,
    totalPopulation: 735
  },
  {
    year: 1993,
    totalPopulation: 603
  },
  {
    year: 2038,
    totalPopulation: 916
  },
  {
    year: 2012,
    totalPopulation: 720
  },
  {
    year: 2026,
    totalPopulation: 921
  },
  {
    year: 1995,
    totalPopulation: 669
  },
  {
    year: 1990,
    totalPopulation: 558
  },
  {
    year: 2048,
    totalPopulation: 870
  },
  {
    year: 2050,
    totalPopulation: 851
  },
  {
    year: 2036,
    totalPopulation: 912
  },
  {
    year: 1998,
    totalPopulation: 778
  },
  {
    year: 2013,
    totalPopulation: 736
  },
  {
    year: 2001,
    totalPopulation: 822
  },
  {
    year: 2007,
    totalPopulation: 808
  },
  {
    year: 2045,
    totalPopulation: 888
  },
  {
    year: 2042,
    totalPopulation: 905
  },
  {
    year: 2004,
    totalPopulation: 850
  },
  {
    year: 2041,
    totalPopulation: 907
  },
  {
    year: 2049,
    totalPopulation: 860
  },
  {
    year: 2022,
    totalPopulation: 901
  },
  {
    year: 2044,
    totalPopulation: 897
  },
  {
    year: 2046,
    totalPopulation: 885
  },
  {
    year: 2033,
    totalPopulation: 918
  },
  {
    year: 2023,
    totalPopulation: 907
  },
  {
    year: 2028,
    totalPopulation: 929
  },
  {
    year: 2006,
    totalPopulation: 791
  },
  {
    year: 2018,
    totalPopulation: 812
  },
  {
    year: 2005,
    totalPopulation: 805
  },
  {
    year: 2014,
    totalPopulation: 741
  },
  {
    year: 2035,
    totalPopulation: 914
  },
  {
    year: 1992,
    totalPopulation: 582
  },
  {
    year: 1999,
    totalPopulation: 807
  },
  {
    year: 2040,
    totalPopulation: 915
  },
  {
    year: 2017,
    totalPopulation: 782
  },
  {
    year: 2019,
    totalPopulation: 834
  },
  {
    year: 2020,
    totalPopulation: 863
  },
  {
    year: 2047,
    totalPopulation: 878
  },
  {
    year: 2029,
    totalPopulation: 930
  },
  {
    year: 2021,
    totalPopulation: 885
  },
  {
    year: 2025,
    totalPopulation: 920
  },
  {
    year: 2009,
    totalPopulation: 712
  },
  {
    year: 2030,
    totalPopulation: 929
  },
  {
    year: 2039,
    totalPopulation: 919
  },
  {
    year: 2008,
    totalPopulation: 769
  },
  {
    year: 1994,
    totalPopulation: 648
  },
  {
    year: 2027,
    totalPopulation: 930
  }
];
const Hinsdale = [
  {
    year: 2021,
    totalPopulation: 792
  },
  {
    year: 2009,
    totalPopulation: 828
  },
  {
    year: 2012,
    totalPopulation: 835
  },
  {
    year: 1998,
    totalPopulation: 775
  },
  {
    year: 2003,
    totalPopulation: 785
  },
  {
    year: 2027,
    totalPopulation: 824
  },
  {
    year: 2039,
    totalPopulation: 842
  },
  {
    year: 2022,
    totalPopulation: 794
  },
  {
    year: 2014,
    totalPopulation: 822
  },
  {
    year: 2007,
    totalPopulation: 847
  },
  {
    year: 2028,
    totalPopulation: 819
  },
  {
    year: 2008,
    totalPopulation: 825
  },
  {
    year: 2045,
    totalPopulation: 853
  },
  {
    year: 2016,
    totalPopulation: 808
  },
  {
    year: 2001,
    totalPopulation: 801
  },
  {
    year: 2004,
    totalPopulation: 833
  },
  {
    year: 2024,
    totalPopulation: 808
  },
  {
    year: 2037,
    totalPopulation: 834
  },
  {
    year: 2015,
    totalPopulation: 813
  },
  {
    year: 1996,
    totalPopulation: 710
  },
  {
    year: 2e3,
    totalPopulation: 792
  },
  {
    year: 2049,
    totalPopulation: 854
  },
  {
    year: 2010,
    totalPopulation: 843
  },
  {
    year: 2011,
    totalPopulation: 841
  },
  {
    year: 1995,
    totalPopulation: 657
  },
  {
    year: 1997,
    totalPopulation: 739
  },
  {
    year: 2036,
    totalPopulation: 835
  },
  {
    year: 2013,
    totalPopulation: 825
  },
  {
    year: 2017,
    totalPopulation: 806
  },
  {
    year: 2005,
    totalPopulation: 808
  },
  {
    year: 2019,
    totalPopulation: 802
  },
  {
    year: 1991,
    totalPopulation: 449
  },
  {
    year: 2044,
    totalPopulation: 849
  },
  {
    year: 2020,
    totalPopulation: 799
  },
  {
    year: 2033,
    totalPopulation: 833
  },
  {
    year: 1993,
    totalPopulation: 535
  },
  {
    year: 2032,
    totalPopulation: 836
  },
  {
    year: 2034,
    totalPopulation: 833
  },
  {
    year: 2029,
    totalPopulation: 827
  },
  {
    year: 2047,
    totalPopulation: 846
  },
  {
    year: 2018,
    totalPopulation: 799
  },
  {
    year: 2031,
    totalPopulation: 831
  },
  {
    year: 2040,
    totalPopulation: 835
  },
  {
    year: 2038,
    totalPopulation: 841
  },
  {
    year: 2023,
    totalPopulation: 797
  },
  {
    year: 2026,
    totalPopulation: 818
  },
  {
    year: 2043,
    totalPopulation: 839
  },
  {
    year: 2042,
    totalPopulation: 845
  },
  {
    year: 1994,
    totalPopulation: 614
  },
  {
    year: 2048,
    totalPopulation: 847
  },
  {
    year: 1990,
    totalPopulation: 467
  },
  {
    year: 2025,
    totalPopulation: 812
  },
  {
    year: 2002,
    totalPopulation: 805
  },
  {
    year: 2035,
    totalPopulation: 832
  },
  {
    year: 2030,
    totalPopulation: 825
  },
  {
    year: 2006,
    totalPopulation: 829
  },
  {
    year: 2041,
    totalPopulation: 838
  },
  {
    year: 1999,
    totalPopulation: 787
  },
  {
    year: 2050,
    totalPopulation: 859
  },
  {
    year: 2046,
    totalPopulation: 848
  },
  {
    year: 1992,
    totalPopulation: 504
  }
];
const Lake = [
  {
    year: 2037,
    totalPopulation: 8528
  },
  {
    year: 2036,
    totalPopulation: 8475
  },
  {
    year: 2049,
    totalPopulation: 8882
  },
  {
    year: 2002,
    totalPopulation: 7726
  },
  {
    year: 2022,
    totalPopulation: 7443
  },
  {
    year: 2010,
    totalPopulation: 7282
  },
  {
    year: 2018,
    totalPopulation: 7329
  },
  {
    year: 2007,
    totalPopulation: 7270
  },
  {
    year: 2013,
    totalPopulation: 7077
  },
  {
    year: 2011,
    totalPopulation: 7238
  },
  {
    year: 1996,
    totalPopulation: 7554
  },
  {
    year: 2016,
    totalPopulation: 7239
  },
  {
    year: 2042,
    totalPopulation: 8722
  },
  {
    year: 2045,
    totalPopulation: 8799
  },
  {
    year: 2041,
    totalPopulation: 8689
  },
  {
    year: 1998,
    totalPopulation: 7827
  },
  {
    year: 2009,
    totalPopulation: 7174
  },
  {
    year: 2046,
    totalPopulation: 8823
  },
  {
    year: 2012,
    totalPopulation: 7100
  },
  {
    year: 2031,
    totalPopulation: 8180
  },
  {
    year: 1993,
    totalPopulation: 6265
  },
  {
    year: 2040,
    totalPopulation: 8655
  },
  {
    year: 2047,
    totalPopulation: 8839
  },
  {
    year: 2017,
    totalPopulation: 7355
  },
  {
    year: 2035,
    totalPopulation: 8416
  },
  {
    year: 2003,
    totalPopulation: 7521
  },
  {
    year: 2043,
    totalPopulation: 8748
  },
  {
    year: 2004,
    totalPopulation: 7414
  },
  {
    year: 2039,
    totalPopulation: 8625
  },
  {
    year: 1994,
    totalPopulation: 6378
  },
  {
    year: 2e3,
    totalPopulation: 7939
  },
  {
    year: 1999,
    totalPopulation: 7819
  },
  {
    year: 1997,
    totalPopulation: 7870
  },
  {
    year: 2024,
    totalPopulation: 7590
  },
  {
    year: 2006,
    totalPopulation: 7219
  },
  {
    year: 2048,
    totalPopulation: 8855
  },
  {
    year: 2001,
    totalPopulation: 7819
  },
  {
    year: 2030,
    totalPopulation: 8090
  },
  {
    year: 2025,
    totalPopulation: 7670
  },
  {
    year: 2019,
    totalPopulation: 7555
  },
  {
    year: 1992,
    totalPopulation: 6208
  },
  {
    year: 1991,
    totalPopulation: 6136
  },
  {
    year: 2050,
    totalPopulation: 8892
  },
  {
    year: 2032,
    totalPopulation: 8244
  },
  {
    year: 2008,
    totalPopulation: 7270
  },
  {
    year: 2044,
    totalPopulation: 8777
  },
  {
    year: 2021,
    totalPopulation: 7383
  },
  {
    year: 2034,
    totalPopulation: 8351
  },
  {
    year: 2020,
    totalPopulation: 7417
  },
  {
    year: 2038,
    totalPopulation: 8584
  },
  {
    year: 1995,
    totalPopulation: 7148
  },
  {
    year: 2014,
    totalPopulation: 7089
  },
  {
    year: 2015,
    totalPopulation: 7157
  },
  {
    year: 2026,
    totalPopulation: 7748
  },
  {
    year: 2023,
    totalPopulation: 7519
  },
  {
    year: 1990,
    totalPopulation: 6007
  },
  {
    year: 2033,
    totalPopulation: 8295
  },
  {
    year: 2029,
    totalPopulation: 7997
  },
  {
    year: 2027,
    totalPopulation: 7832
  },
  {
    year: 2028,
    totalPopulation: 7911
  },
  {
    year: 2005,
    totalPopulation: 7287
  }
];
const Baca = [
  {
    year: 2006,
    totalPopulation: 4086
  },
  {
    year: 2005,
    totalPopulation: 4100
  },
  {
    year: 1995,
    totalPopulation: 4432
  },
  {
    year: 2010,
    totalPopulation: 3795
  },
  {
    year: 2023,
    totalPopulation: 3394
  },
  {
    year: 2e3,
    totalPopulation: 4500
  },
  {
    year: 2025,
    totalPopulation: 3342
  },
  {
    year: 2017,
    totalPopulation: 3524
  },
  {
    year: 2036,
    totalPopulation: 3121
  },
  {
    year: 1992,
    totalPopulation: 4298
  },
  {
    year: 2049,
    totalPopulation: 2939
  },
  {
    year: 1991,
    totalPopulation: 4438
  },
  {
    year: 2037,
    totalPopulation: 3101
  },
  {
    year: 2042,
    totalPopulation: 3027
  },
  {
    year: 2048,
    totalPopulation: 2944
  },
  {
    year: 1999,
    totalPopulation: 4522
  },
  {
    year: 2047,
    totalPopulation: 2964
  },
  {
    year: 2011,
    totalPopulation: 3758
  },
  {
    year: 2040,
    totalPopulation: 3053
  },
  {
    year: 2039,
    totalPopulation: 3070
  },
  {
    year: 2003,
    totalPopulation: 4257
  },
  {
    year: 2031,
    totalPopulation: 3211
  },
  {
    year: 2044,
    totalPopulation: 3004
  },
  {
    year: 1997,
    totalPopulation: 4560
  },
  {
    year: 2008,
    totalPopulation: 3903
  },
  {
    year: 2016,
    totalPopulation: 3508
  },
  {
    year: 2032,
    totalPopulation: 3193
  },
  {
    year: 2020,
    totalPopulation: 3476
  },
  {
    year: 2007,
    totalPopulation: 3998
  },
  {
    year: 2030,
    totalPopulation: 3231
  },
  {
    year: 1996,
    totalPopulation: 4524
  },
  {
    year: 2035,
    totalPopulation: 3139
  },
  {
    year: 1998,
    totalPopulation: 4531
  },
  {
    year: 1990,
    totalPopulation: 4556
  },
  {
    year: 2015,
    totalPopulation: 3533
  },
  {
    year: 2024,
    totalPopulation: 3370
  },
  {
    year: 2026,
    totalPopulation: 3321
  },
  {
    year: 1993,
    totalPopulation: 4325
  },
  {
    year: 2004,
    totalPopulation: 4163
  },
  {
    year: 2033,
    totalPopulation: 3175
  },
  {
    year: 2043,
    totalPopulation: 3017
  },
  {
    year: 2028,
    totalPopulation: 3273
  },
  {
    year: 2001,
    totalPopulation: 4445
  },
  {
    year: 2021,
    totalPopulation: 3451
  },
  {
    year: 2041,
    totalPopulation: 3042
  },
  {
    year: 2022,
    totalPopulation: 3420
  },
  {
    year: 2012,
    totalPopulation: 3702
  },
  {
    year: 2002,
    totalPopulation: 4315
  },
  {
    year: 2018,
    totalPopulation: 3548
  },
  {
    year: 2019,
    totalPopulation: 3569
  },
  {
    year: 2050,
    totalPopulation: 2928
  },
  {
    year: 2029,
    totalPopulation: 3252
  },
  {
    year: 2009,
    totalPopulation: 3816
  },
  {
    year: 2027,
    totalPopulation: 3297
  },
  {
    year: 2014,
    totalPopulation: 3566
  },
  {
    year: 1994,
    totalPopulation: 4387
  },
  {
    year: 2045,
    totalPopulation: 2991
  },
  {
    year: 2034,
    totalPopulation: 3150
  },
  {
    year: 2038,
    totalPopulation: 3082
  },
  {
    year: 2046,
    totalPopulation: 2978
  },
  {
    year: 2013,
    totalPopulation: 3635
  }
];
const Montezuma = [
  {
    year: 2028,
    totalPopulation: 27338
  },
  {
    year: 2037,
    totalPopulation: 28722
  },
  {
    year: 2020,
    totalPopulation: 25857
  },
  {
    year: 2050,
    totalPopulation: 29894
  },
  {
    year: 2023,
    totalPopulation: 26225
  },
  {
    year: 2049,
    totalPopulation: 29817
  },
  {
    year: 2042,
    totalPopulation: 29233
  },
  {
    year: 2029,
    totalPopulation: 27528
  },
  {
    year: 1994,
    totalPopulation: 21390
  },
  {
    year: 2022,
    totalPopulation: 26034
  },
  {
    year: 2003,
    totalPopulation: 24379
  },
  {
    year: 2009,
    totalPopulation: 25362
  },
  {
    year: 2021,
    totalPopulation: 25860
  },
  {
    year: 2043,
    totalPopulation: 29315
  },
  {
    year: 2036,
    totalPopulation: 28608
  },
  {
    year: 2007,
    totalPopulation: 25184
  },
  {
    year: 2010,
    totalPopulation: 25532
  },
  {
    year: 2026,
    totalPopulation: 26910
  },
  {
    year: 2045,
    totalPopulation: 29486
  },
  {
    year: 2030,
    totalPopulation: 27708
  },
  {
    year: 1990,
    totalPopulation: 18672
  },
  {
    year: 2031,
    totalPopulation: 27888
  },
  {
    year: 2017,
    totalPopulation: 25561
  },
  {
    year: 2013,
    totalPopulation: 25482
  },
  {
    year: 1997,
    totalPopulation: 22974
  },
  {
    year: 2018,
    totalPopulation: 25607
  },
  {
    year: 2025,
    totalPopulation: 26648
  },
  {
    year: 2034,
    totalPopulation: 28343
  },
  {
    year: 2011,
    totalPopulation: 25522
  },
  {
    year: 2014,
    totalPopulation: 25469
  },
  {
    year: 1998,
    totalPopulation: 23114
  },
  {
    year: 2019,
    totalPopulation: 25731
  },
  {
    year: 1991,
    totalPopulation: 19062
  },
  {
    year: 2006,
    totalPopulation: 25017
  },
  {
    year: 2048,
    totalPopulation: 29728
  },
  {
    year: 1995,
    totalPopulation: 22159
  },
  {
    year: 1993,
    totalPopulation: 20645
  },
  {
    year: 2041,
    totalPopulation: 29145
  },
  {
    year: 2039,
    totalPopulation: 28950
  },
  {
    year: 2005,
    totalPopulation: 24600
  },
  {
    year: 2047,
    totalPopulation: 29652
  },
  {
    year: 2035,
    totalPopulation: 28479
  },
  {
    year: 2046,
    totalPopulation: 29572
  },
  {
    year: 2044,
    totalPopulation: 29401
  },
  {
    year: 1999,
    totalPopulation: 23518
  },
  {
    year: 1996,
    totalPopulation: 22645
  },
  {
    year: 2038,
    totalPopulation: 28841
  },
  {
    year: 2002,
    totalPopulation: 24107
  },
  {
    year: 2033,
    totalPopulation: 28204
  },
  {
    year: 2e3,
    totalPopulation: 23852
  },
  {
    year: 2001,
    totalPopulation: 23873
  },
  {
    year: 2015,
    totalPopulation: 25519
  },
  {
    year: 2016,
    totalPopulation: 25543
  },
  {
    year: 2024,
    totalPopulation: 26432
  },
  {
    year: 2012,
    totalPopulation: 25496
  },
  {
    year: 2032,
    totalPopulation: 28052
  },
  {
    year: 1992,
    totalPopulation: 19654
  },
  {
    year: 2027,
    totalPopulation: 27128
  },
  {
    year: 2040,
    totalPopulation: 29048
  },
  {
    year: 2008,
    totalPopulation: 25197
  },
  {
    year: 2004,
    totalPopulation: 24602
  }
];
const Conejos = [
  {
    year: 2031,
    totalPopulation: 7156
  },
  {
    year: 2013,
    totalPopulation: 8071
  },
  {
    year: 2009,
    totalPopulation: 8211
  },
  {
    year: 2024,
    totalPopulation: 7250
  },
  {
    year: 2004,
    totalPopulation: 8503
  },
  {
    year: 1991,
    totalPopulation: 7535
  },
  {
    year: 2014,
    totalPopulation: 7993
  },
  {
    year: 2028,
    totalPopulation: 7189
  },
  {
    year: 2030,
    totalPopulation: 7166
  },
  {
    year: 2042,
    totalPopulation: 6961
  },
  {
    year: 2017,
    totalPopulation: 7754
  },
  {
    year: 2006,
    totalPopulation: 8471
  },
  {
    year: 2039,
    totalPopulation: 7039
  },
  {
    year: 2022,
    totalPopulation: 7296
  },
  {
    year: 1996,
    totalPopulation: 8021
  },
  {
    year: 2010,
    totalPopulation: 8282
  },
  {
    year: 2032,
    totalPopulation: 7145
  },
  {
    year: 1998,
    totalPopulation: 8186
  },
  {
    year: 2025,
    totalPopulation: 7234
  },
  {
    year: 2007,
    totalPopulation: 8434
  },
  {
    year: 2021,
    totalPopulation: 7321
  },
  {
    year: 2015,
    totalPopulation: 7928
  },
  {
    year: 2005,
    totalPopulation: 8499
  },
  {
    year: 2047,
    totalPopulation: 6806
  },
  {
    year: 2034,
    totalPopulation: 7121
  },
  {
    year: 2040,
    totalPopulation: 7014
  },
  {
    year: 2012,
    totalPopulation: 8137
  },
  {
    year: 2037,
    totalPopulation: 7080
  },
  {
    year: 2e3,
    totalPopulation: 8407
  },
  {
    year: 2050,
    totalPopulation: 6703
  },
  {
    year: 1994,
    totalPopulation: 7746
  },
  {
    year: 2036,
    totalPopulation: 7099
  },
  {
    year: 2038,
    totalPopulation: 7063
  },
  {
    year: 2003,
    totalPopulation: 8387
  },
  {
    year: 1993,
    totalPopulation: 7641
  },
  {
    year: 2048,
    totalPopulation: 6777
  },
  {
    year: 2029,
    totalPopulation: 7178
  },
  {
    year: 1997,
    totalPopulation: 8104
  },
  {
    year: 2008,
    totalPopulation: 8383
  },
  {
    year: 2041,
    totalPopulation: 6993
  },
  {
    year: 2043,
    totalPopulation: 6935
  },
  {
    year: 2016,
    totalPopulation: 7844
  },
  {
    year: 1995,
    totalPopulation: 7877
  },
  {
    year: 1992,
    totalPopulation: 7513
  },
  {
    year: 1999,
    totalPopulation: 8313
  },
  {
    year: 2002,
    totalPopulation: 8388
  },
  {
    year: 2033,
    totalPopulation: 7134
  },
  {
    year: 2026,
    totalPopulation: 7214
  },
  {
    year: 2035,
    totalPopulation: 7112
  },
  {
    year: 1990,
    totalPopulation: 7453
  },
  {
    year: 2027,
    totalPopulation: 7204
  },
  {
    year: 2046,
    totalPopulation: 6844
  },
  {
    year: 2045,
    totalPopulation: 6869
  },
  {
    year: 2018,
    totalPopulation: 7662
  },
  {
    year: 2044,
    totalPopulation: 6907
  },
  {
    year: 2019,
    totalPopulation: 7548
  },
  {
    year: 2049,
    totalPopulation: 6735
  },
  {
    year: 2020,
    totalPopulation: 7436
  },
  {
    year: 2011,
    totalPopulation: 8197
  },
  {
    year: 2001,
    totalPopulation: 8364
  },
  {
    year: 2023,
    totalPopulation: 7269
  }
];
const Sedgwick = [
  {
    year: 2015,
    totalPopulation: 2388
  },
  {
    year: 2042,
    totalPopulation: 2357
  },
  {
    year: 2010,
    totalPopulation: 2367
  },
  {
    year: 2018,
    totalPopulation: 2401
  },
  {
    year: 2004,
    totalPopulation: 2610
  },
  {
    year: 1994,
    totalPopulation: 2660
  },
  {
    year: 2002,
    totalPopulation: 2691
  },
  {
    year: 2e3,
    totalPopulation: 2742
  },
  {
    year: 2026,
    totalPopulation: 2460
  },
  {
    year: 2024,
    totalPopulation: 2425
  },
  {
    year: 2034,
    totalPopulation: 2397
  },
  {
    year: 2035,
    totalPopulation: 2392
  },
  {
    year: 2017,
    totalPopulation: 2398
  },
  {
    year: 2038,
    totalPopulation: 2371
  },
  {
    year: 2036,
    totalPopulation: 2388
  },
  {
    year: 2029,
    totalPopulation: 2437
  },
  {
    year: 2013,
    totalPopulation: 2383
  },
  {
    year: 2022,
    totalPopulation: 2400
  },
  {
    year: 2028,
    totalPopulation: 2442
  },
  {
    year: 1991,
    totalPopulation: 2668
  },
  {
    year: 2011,
    totalPopulation: 2370
  },
  {
    year: 1998,
    totalPopulation: 2679
  },
  {
    year: 2001,
    totalPopulation: 2694
  },
  {
    year: 2032,
    totalPopulation: 2420
  },
  {
    year: 1992,
    totalPopulation: 2633
  },
  {
    year: 2016,
    totalPopulation: 2390
  },
  {
    year: 1997,
    totalPopulation: 2730
  },
  {
    year: 2048,
    totalPopulation: 2335
  },
  {
    year: 1990,
    totalPopulation: 2690
  },
  {
    year: 2014,
    totalPopulation: 2384
  },
  {
    year: 2027,
    totalPopulation: 2454
  },
  {
    year: 2007,
    totalPopulation: 2425
  },
  {
    year: 2040,
    totalPopulation: 2361
  },
  {
    year: 2037,
    totalPopulation: 2379
  },
  {
    year: 2039,
    totalPopulation: 2365
  },
  {
    year: 2030,
    totalPopulation: 2428
  },
  {
    year: 2045,
    totalPopulation: 2340
  },
  {
    year: 2006,
    totalPopulation: 2510
  },
  {
    year: 2041,
    totalPopulation: 2355
  },
  {
    year: 2050,
    totalPopulation: 2336
  },
  {
    year: 2031,
    totalPopulation: 2420
  },
  {
    year: 1999,
    totalPopulation: 2718
  },
  {
    year: 2005,
    totalPopulation: 2575
  },
  {
    year: 2019,
    totalPopulation: 2404
  },
  {
    year: 1995,
    totalPopulation: 2652
  },
  {
    year: 1993,
    totalPopulation: 2650
  },
  {
    year: 2009,
    totalPopulation: 2379
  },
  {
    year: 2043,
    totalPopulation: 2349
  },
  {
    year: 1996,
    totalPopulation: 2681
  },
  {
    year: 2021,
    totalPopulation: 2397
  },
  {
    year: 2044,
    totalPopulation: 2343
  },
  {
    year: 2033,
    totalPopulation: 2412
  },
  {
    year: 2025,
    totalPopulation: 2449
  },
  {
    year: 2049,
    totalPopulation: 2334
  },
  {
    year: 2008,
    totalPopulation: 2422
  },
  {
    year: 2020,
    totalPopulation: 2410
  },
  {
    year: 2023,
    totalPopulation: 2414
  },
  {
    year: 2003,
    totalPopulation: 2715
  },
  {
    year: 2046,
    totalPopulation: 2337
  },
  {
    year: 2012,
    totalPopulation: 2374
  },
  {
    year: 2047,
    totalPopulation: 2338
  }
];
const Arapahoe = [
  {
    year: 2035,
    totalPopulation: 759590
  },
  {
    year: 2046,
    totalPopulation: 816915
  },
  {
    year: 2010,
    totalPopulation: 574819
  },
  {
    year: 1991,
    totalPopulation: 403200
  },
  {
    year: 2027,
    totalPopulation: 703593
  },
  {
    year: 2e3,
    totalPopulation: 490722
  },
  {
    year: 2026,
    totalPopulation: 696151
  },
  {
    year: 2017,
    totalPopulation: 642977
  },
  {
    year: 2002,
    totalPopulation: 510500
  },
  {
    year: 2031,
    totalPopulation: 732329
  },
  {
    year: 2025,
    totalPopulation: 688688
  },
  {
    year: 2016,
    totalPopulation: 637657
  },
  {
    year: 2039,
    totalPopulation: 785031
  },
  {
    year: 2018,
    totalPopulation: 650166
  },
  {
    year: 2033,
    totalPopulation: 746152
  },
  {
    year: 2028,
    totalPopulation: 711027
  },
  {
    year: 2020,
    totalPopulation: 655047
  },
  {
    year: 1999,
    totalPopulation: 481307
  },
  {
    year: 2029,
    totalPopulation: 718181
  },
  {
    year: 2008,
    totalPopulation: 556252
  },
  {
    year: 1994,
    totalPopulation: 436413
  },
  {
    year: 2001,
    totalPopulation: 501667
  },
  {
    year: 1995,
    totalPopulation: 442542
  },
  {
    year: 2014,
    totalPopulation: 618311
  },
  {
    year: 2013,
    totalPopulation: 607859
  },
  {
    year: 2023,
    totalPopulation: 672827
  },
  {
    year: 2048,
    totalPopulation: 822581
  },
  {
    year: 2022,
    totalPopulation: 665144
  },
  {
    year: 2047,
    totalPopulation: 819830
  },
  {
    year: 2019,
    totalPopulation: 653808
  },
  {
    year: 2037,
    totalPopulation: 772640
  },
  {
    year: 2041,
    totalPopulation: 795758
  },
  {
    year: 2006,
    totalPopulation: 536049
  },
  {
    year: 2040,
    totalPopulation: 790629
  },
  {
    year: 1990,
    totalPopulation: 393289
  },
  {
    year: 2021,
    totalPopulation: 658287
  },
  {
    year: 2004,
    totalPopulation: 523717
  },
  {
    year: 2030,
    totalPopulation: 725283
  },
  {
    year: 1998,
    totalPopulation: 472406
  },
  {
    year: 2009,
    totalPopulation: 566477
  },
  {
    year: 2045,
    totalPopulation: 813101
  },
  {
    year: 2005,
    totalPopulation: 528217
  },
  {
    year: 2024,
    totalPopulation: 680586
  },
  {
    year: 2044,
    totalPopulation: 809093
  },
  {
    year: 2049,
    totalPopulation: 825209
  },
  {
    year: 2015,
    totalPopulation: 629968
  },
  {
    year: 2003,
    totalPopulation: 516352
  },
  {
    year: 1993,
    totalPopulation: 427474
  },
  {
    year: 2038,
    totalPopulation: 778984
  },
  {
    year: 2043,
    totalPopulation: 804864
  },
  {
    year: 1997,
    totalPopulation: 459061
  },
  {
    year: 2032,
    totalPopulation: 739287
  },
  {
    year: 1996,
    totalPopulation: 451067
  },
  {
    year: 2011,
    totalPopulation: 585817
  },
  {
    year: 2034,
    totalPopulation: 752915
  },
  {
    year: 1992,
    totalPopulation: 417678
  },
  {
    year: 2012,
    totalPopulation: 596226
  },
  {
    year: 2036,
    totalPopulation: 766172
  },
  {
    year: 2007,
    totalPopulation: 545876
  },
  {
    year: 2042,
    totalPopulation: 800427
  },
  {
    year: 2050,
    totalPopulation: 827721
  }
];
const Larimer = [
  {
    year: 2029,
    totalPopulation: 407366
  },
  {
    year: 2040,
    totalPopulation: 465225
  },
  {
    year: 2028,
    totalPopulation: 401689
  },
  {
    year: 2019,
    totalPopulation: 356799
  },
  {
    year: 2039,
    totalPopulation: 460320
  },
  {
    year: 2025,
    totalPopulation: 383900
  },
  {
    year: 2020,
    totalPopulation: 359698
  },
  {
    year: 2034,
    totalPopulation: 434727
  },
  {
    year: 2041,
    totalPopulation: 470052
  },
  {
    year: 2018,
    totalPopulation: 350663
  },
  {
    year: 2049,
    totalPopulation: 506589
  },
  {
    year: 1991,
    totalPopulation: 193546
  },
  {
    year: 1997,
    totalPopulation: 232800
  },
  {
    year: 1995,
    totalPopulation: 221626
  },
  {
    year: 2032,
    totalPopulation: 423990
  },
  {
    year: 2033,
    totalPopulation: 429395
  },
  {
    year: 2042,
    totalPopulation: 474832
  },
  {
    year: 2009,
    totalPopulation: 297501
  },
  {
    year: 2017,
    totalPopulation: 344189
  },
  {
    year: 1999,
    totalPopulation: 246158
  },
  {
    year: 2010,
    totalPopulation: 300532
  },
  {
    year: 2023,
    totalPopulation: 372573
  },
  {
    year: 2016,
    totalPopulation: 339126
  },
  {
    year: 1990,
    totalPopulation: 187078
  },
  {
    year: 2012,
    totalPopulation: 310960
  },
  {
    year: 2046,
    totalPopulation: 493355
  },
  {
    year: 2043,
    totalPopulation: 479542
  },
  {
    year: 2038,
    totalPopulation: 455348
  },
  {
    year: 1998,
    totalPopulation: 239080
  },
  {
    year: 2036,
    totalPopulation: 445188
  },
  {
    year: 1993,
    totalPopulation: 206849
  },
  {
    year: 2027,
    totalPopulation: 395939
  },
  {
    year: 2047,
    totalPopulation: 497837
  },
  {
    year: 2031,
    totalPopulation: 418513
  },
  {
    year: 2008,
    totalPopulation: 292389
  },
  {
    year: 1994,
    totalPopulation: 214930
  },
  {
    year: 2011,
    totalPopulation: 305342
  },
  {
    year: 2013,
    totalPopulation: 316339
  },
  {
    year: 2045,
    totalPopulation: 488809
  },
  {
    year: 2022,
    totalPopulation: 367183
  },
  {
    year: 1996,
    totalPopulation: 227251
  },
  {
    year: 2026,
    totalPopulation: 390103
  },
  {
    year: 2048,
    totalPopulation: 502244
  },
  {
    year: 2004,
    totalPopulation: 273262
  },
  {
    year: 2007,
    totalPopulation: 286752
  },
  {
    year: 1992,
    totalPopulation: 199664
  },
  {
    year: 2002,
    totalPopulation: 266177
  },
  {
    year: 2001,
    totalPopulation: 260911
  },
  {
    year: 2006,
    totalPopulation: 281026
  },
  {
    year: 2030,
    totalPopulation: 412980
  },
  {
    year: 2005,
    totalPopulation: 275871
  },
  {
    year: 2035,
    totalPopulation: 439991
  },
  {
    year: 2044,
    totalPopulation: 484200
  },
  {
    year: 2021,
    totalPopulation: 362618
  },
  {
    year: 2014,
    totalPopulation: 324125
  },
  {
    year: 2015,
    totalPopulation: 333446
  },
  {
    year: 2003,
    totalPopulation: 268147
  },
  {
    year: 2024,
    totalPopulation: 378059
  },
  {
    year: 2050,
    totalPopulation: 510876
  },
  {
    year: 2037,
    totalPopulation: 450311
  },
  {
    year: 2e3,
    totalPopulation: 253087
  }
];
const Huerfano = [
  {
    year: 2019,
    totalPopulation: 6776
  },
  {
    year: 2002,
    totalPopulation: 7916
  },
  {
    year: 2034,
    totalPopulation: 6260
  },
  {
    year: 2044,
    totalPopulation: 5201
  },
  {
    year: 2047,
    totalPopulation: 4896
  },
  {
    year: 2037,
    totalPopulation: 5958
  },
  {
    year: 2004,
    totalPopulation: 7731
  },
  {
    year: 2048,
    totalPopulation: 4807
  },
  {
    year: 2046,
    totalPopulation: 4994
  },
  {
    year: 2045,
    totalPopulation: 5095
  },
  {
    year: 2035,
    totalPopulation: 6164
  },
  {
    year: 2e3,
    totalPopulation: 7826
  },
  {
    year: 2032,
    totalPopulation: 6437
  },
  {
    year: 2022,
    totalPopulation: 6793
  },
  {
    year: 2012,
    totalPopulation: 6689
  },
  {
    year: 2028,
    totalPopulation: 6669
  },
  {
    year: 2042,
    totalPopulation: 5406
  },
  {
    year: 2027,
    totalPopulation: 6703
  },
  {
    year: 2041,
    totalPopulation: 5519
  },
  {
    year: 2020,
    totalPopulation: 6799
  },
  {
    year: 1991,
    totalPopulation: 6060
  },
  {
    year: 2029,
    totalPopulation: 6630
  },
  {
    year: 2009,
    totalPopulation: 6712
  },
  {
    year: 1999,
    totalPopulation: 7830
  },
  {
    year: 1995,
    totalPopulation: 7159
  },
  {
    year: 2003,
    totalPopulation: 8044
  },
  {
    year: 2017,
    totalPopulation: 6739
  },
  {
    year: 2036,
    totalPopulation: 6065
  },
  {
    year: 2006,
    totalPopulation: 7749
  },
  {
    year: 2021,
    totalPopulation: 6807
  },
  {
    year: 2025,
    totalPopulation: 6754
  },
  {
    year: 2030,
    totalPopulation: 6587
  },
  {
    year: 2040,
    totalPopulation: 5633
  },
  {
    year: 2043,
    totalPopulation: 5303
  },
  {
    year: 2008,
    totalPopulation: 7676
  },
  {
    year: 2018,
    totalPopulation: 6756
  },
  {
    year: 2013,
    totalPopulation: 6701
  },
  {
    year: 1996,
    totalPopulation: 7395
  },
  {
    year: 2050,
    totalPopulation: 4616
  },
  {
    year: 2031,
    totalPopulation: 6509
  },
  {
    year: 2005,
    totalPopulation: 7821
  },
  {
    year: 2010,
    totalPopulation: 6655
  },
  {
    year: 2023,
    totalPopulation: 6775
  },
  {
    year: 2014,
    totalPopulation: 6703
  },
  {
    year: 2039,
    totalPopulation: 5744
  },
  {
    year: 2016,
    totalPopulation: 6721
  },
  {
    year: 2024,
    totalPopulation: 6763
  },
  {
    year: 2011,
    totalPopulation: 6674
  },
  {
    year: 2001,
    totalPopulation: 7903
  },
  {
    year: 2038,
    totalPopulation: 5855
  },
  {
    year: 1998,
    totalPopulation: 7780
  },
  {
    year: 1993,
    totalPopulation: 6443
  },
  {
    year: 1997,
    totalPopulation: 7667
  },
  {
    year: 2015,
    totalPopulation: 6710
  },
  {
    year: 1990,
    totalPopulation: 6009
  },
  {
    year: 2049,
    totalPopulation: 4706
  },
  {
    year: 2007,
    totalPopulation: 7659
  },
  {
    year: 2026,
    totalPopulation: 6737
  },
  {
    year: 2033,
    totalPopulation: 6349
  },
  {
    year: 1994,
    totalPopulation: 6914
  },
  {
    year: 1992,
    totalPopulation: 6182
  }
];
const Otero = [
  {
    year: 2001,
    totalPopulation: 19899
  },
  {
    year: 2010,
    totalPopulation: 18838
  },
  {
    year: 2042,
    totalPopulation: 15970
  },
  {
    year: 2039,
    totalPopulation: 16455
  },
  {
    year: 1998,
    totalPopulation: 20507
  },
  {
    year: 2022,
    totalPopulation: 18608
  },
  {
    year: 2021,
    totalPopulation: 18703
  },
  {
    year: 2016,
    totalPopulation: 18792
  },
  {
    year: 1991,
    totalPopulation: 20374
  },
  {
    year: 2038,
    totalPopulation: 16606
  },
  {
    year: 1999,
    totalPopulation: 20408
  },
  {
    year: 2013,
    totalPopulation: 18798
  },
  {
    year: 1990,
    totalPopulation: 20185
  },
  {
    year: 2027,
    totalPopulation: 18069
  },
  {
    year: 2046,
    totalPopulation: 15304
  },
  {
    year: 2026,
    totalPopulation: 18180
  },
  {
    year: 2003,
    totalPopulation: 19666
  },
  {
    year: 2007,
    totalPopulation: 18941
  },
  {
    year: 1992,
    totalPopulation: 20293
  },
  {
    year: 2012,
    totalPopulation: 18816
  },
  {
    year: 2011,
    totalPopulation: 18829
  },
  {
    year: 2049,
    totalPopulation: 14817
  },
  {
    year: 2040,
    totalPopulation: 16302
  },
  {
    year: 1995,
    totalPopulation: 20698
  },
  {
    year: 2036,
    totalPopulation: 16902
  },
  {
    year: 1993,
    totalPopulation: 20435
  },
  {
    year: 1997,
    totalPopulation: 20763
  },
  {
    year: 2041,
    totalPopulation: 16133
  },
  {
    year: 2019,
    totalPopulation: 18738
  },
  {
    year: 2015,
    totalPopulation: 18819
  },
  {
    year: 2029,
    totalPopulation: 17824
  },
  {
    year: 2004,
    totalPopulation: 19561
  },
  {
    year: 2023,
    totalPopulation: 18507
  },
  {
    year: 2014,
    totalPopulation: 18781
  },
  {
    year: 2035,
    totalPopulation: 17046
  },
  {
    year: 2034,
    totalPopulation: 17185
  },
  {
    year: 2002,
    totalPopulation: 19625
  },
  {
    year: 2e3,
    totalPopulation: 20244
  },
  {
    year: 2032,
    totalPopulation: 17456
  },
  {
    year: 2005,
    totalPopulation: 19370
  },
  {
    year: 1994,
    totalPopulation: 20489
  },
  {
    year: 2047,
    totalPopulation: 15144
  },
  {
    year: 2025,
    totalPopulation: 18290
  },
  {
    year: 2020,
    totalPopulation: 18681
  },
  {
    year: 2043,
    totalPopulation: 15800
  },
  {
    year: 2048,
    totalPopulation: 14985
  },
  {
    year: 2050,
    totalPopulation: 14654
  },
  {
    year: 2033,
    totalPopulation: 17320
  },
  {
    year: 1996,
    totalPopulation: 20738
  },
  {
    year: 2028,
    totalPopulation: 17946
  },
  {
    year: 2018,
    totalPopulation: 18757
  },
  {
    year: 2030,
    totalPopulation: 17709
  },
  {
    year: 2008,
    totalPopulation: 18854
  },
  {
    year: 2009,
    totalPopulation: 18847
  },
  {
    year: 2045,
    totalPopulation: 15476
  },
  {
    year: 2006,
    totalPopulation: 19188
  },
  {
    year: 2031,
    totalPopulation: 17581
  },
  {
    year: 2044,
    totalPopulation: 15635
  },
  {
    year: 2017,
    totalPopulation: 18762
  },
  {
    year: 2024,
    totalPopulation: 18399
  },
  {
    year: 2037,
    totalPopulation: 16757
  }
];
const Archuleta = [
  {
    year: 2029,
    totalPopulation: 15032
  },
  {
    year: 1993,
    totalPopulation: 6183
  },
  {
    year: 1990,
    totalPopulation: 5352
  },
  {
    year: 2033,
    totalPopulation: 16062
  },
  {
    year: 2002,
    totalPopulation: 10695
  },
  {
    year: 1996,
    totalPopulation: 7929
  },
  {
    year: 2043,
    totalPopulation: 18505
  },
  {
    year: 2050,
    totalPopulation: 19855
  },
  {
    year: 2026,
    totalPopulation: 14373
  },
  {
    year: 2023,
    totalPopulation: 13863
  },
  {
    year: 2003,
    totalPopulation: 10965
  },
  {
    year: 2032,
    totalPopulation: 15800
  },
  {
    year: 2005,
    totalPopulation: 11402
  },
  {
    year: 2028,
    totalPopulation: 14799
  },
  {
    year: 1994,
    totalPopulation: 6538
  },
  {
    year: 2042,
    totalPopulation: 18281
  },
  {
    year: 2025,
    totalPopulation: 14198
  },
  {
    year: 2022,
    totalPopulation: 13693
  },
  {
    year: 2009,
    totalPopulation: 11900
  },
  {
    year: 1997,
    totalPopulation: 8528
  },
  {
    year: 2020,
    totalPopulation: 13368
  },
  {
    year: 2e3,
    totalPopulation: 10042
  },
  {
    year: 2048,
    totalPopulation: 19503
  },
  {
    year: 2006,
    totalPopulation: 11800
  },
  {
    year: 2037,
    totalPopulation: 17077
  },
  {
    year: 2008,
    totalPopulation: 12070
  },
  {
    year: 1991,
    totalPopulation: 5624
  },
  {
    year: 2015,
    totalPopulation: 12006
  },
  {
    year: 2010,
    totalPopulation: 12060
  },
  {
    year: 2031,
    totalPopulation: 15532
  },
  {
    year: 2001,
    totalPopulation: 10464
  },
  {
    year: 2007,
    totalPopulation: 12104
  },
  {
    year: 2021,
    totalPopulation: 13537
  },
  {
    year: 2041,
    totalPopulation: 18055
  },
  {
    year: 2038,
    totalPopulation: 17323
  },
  {
    year: 2039,
    totalPopulation: 17567
  },
  {
    year: 2004,
    totalPopulation: 11169
  },
  {
    year: 2011,
    totalPopulation: 11957
  },
  {
    year: 2016,
    totalPopulation: 12362
  },
  {
    year: 2047,
    totalPopulation: 19316
  },
  {
    year: 2027,
    totalPopulation: 14582
  },
  {
    year: 2045,
    totalPopulation: 18926
  },
  {
    year: 2044,
    totalPopulation: 18718
  },
  {
    year: 1995,
    totalPopulation: 7110
  },
  {
    year: 2018,
    totalPopulation: 13033
  },
  {
    year: 2012,
    totalPopulation: 11989
  },
  {
    year: 2017,
    totalPopulation: 12759
  },
  {
    year: 2036,
    totalPopulation: 16828
  },
  {
    year: 2013,
    totalPopulation: 11993
  },
  {
    year: 2024,
    totalPopulation: 14033
  },
  {
    year: 2040,
    totalPopulation: 17819
  },
  {
    year: 1999,
    totalPopulation: 9570
  },
  {
    year: 2046,
    totalPopulation: 19125
  },
  {
    year: 1992,
    totalPopulation: 5888
  },
  {
    year: 2035,
    totalPopulation: 16575
  },
  {
    year: 1998,
    totalPopulation: 9133
  },
  {
    year: 2019,
    totalPopulation: 13189
  },
  {
    year: 2030,
    totalPopulation: 15278
  },
  {
    year: 2049,
    totalPopulation: 19678
  },
  {
    year: 2014,
    totalPopulation: 11932
  },
  {
    year: 2034,
    totalPopulation: 16324
  }
];
const Phillips = [
  {
    year: 2030,
    totalPopulation: 4516
  },
  {
    year: 2003,
    totalPopulation: 4476
  },
  {
    year: 2033,
    totalPopulation: 4497
  },
  {
    year: 2006,
    totalPopulation: 4505
  },
  {
    year: 2032,
    totalPopulation: 4503
  },
  {
    year: 2029,
    totalPopulation: 4522
  },
  {
    year: 2044,
    totalPopulation: 4400
  },
  {
    year: 1990,
    totalPopulation: 4189
  },
  {
    year: 2010,
    totalPopulation: 4465
  },
  {
    year: 1995,
    totalPopulation: 4477
  },
  {
    year: 2025,
    totalPopulation: 4536
  },
  {
    year: 2027,
    totalPopulation: 4538
  },
  {
    year: 2050,
    totalPopulation: 4366
  },
  {
    year: 2014,
    totalPopulation: 4492
  },
  {
    year: 2008,
    totalPopulation: 4449
  },
  {
    year: 2004,
    totalPopulation: 4584
  },
  {
    year: 2005,
    totalPopulation: 4547
  },
  {
    year: 2036,
    totalPopulation: 4472
  },
  {
    year: 2e3,
    totalPopulation: 4451
  },
  {
    year: 2012,
    totalPopulation: 4479
  },
  {
    year: 2019,
    totalPopulation: 4523
  },
  {
    year: 2024,
    totalPopulation: 4539
  },
  {
    year: 1997,
    totalPopulation: 4575
  },
  {
    year: 2015,
    totalPopulation: 4504
  },
  {
    year: 2026,
    totalPopulation: 4545
  },
  {
    year: 1996,
    totalPopulation: 4502
  },
  {
    year: 1991,
    totalPopulation: 4201
  },
  {
    year: 1992,
    totalPopulation: 4230
  },
  {
    year: 2046,
    totalPopulation: 4390
  },
  {
    year: 1999,
    totalPopulation: 4519
  },
  {
    year: 2038,
    totalPopulation: 4462
  },
  {
    year: 2001,
    totalPopulation: 4488
  },
  {
    year: 2035,
    totalPopulation: 4476
  },
  {
    year: 2041,
    totalPopulation: 4424
  },
  {
    year: 2021,
    totalPopulation: 4555
  },
  {
    year: 2045,
    totalPopulation: 4398
  },
  {
    year: 2049,
    totalPopulation: 4368
  },
  {
    year: 1993,
    totalPopulation: 4373
  },
  {
    year: 2028,
    totalPopulation: 4534
  },
  {
    year: 2009,
    totalPopulation: 4461
  },
  {
    year: 2011,
    totalPopulation: 4481
  },
  {
    year: 2034,
    totalPopulation: 4487
  },
  {
    year: 1994,
    totalPopulation: 4403
  },
  {
    year: 2037,
    totalPopulation: 4468
  },
  {
    year: 2042,
    totalPopulation: 4423
  },
  {
    year: 2016,
    totalPopulation: 4503
  },
  {
    year: 2017,
    totalPopulation: 4511
  },
  {
    year: 2020,
    totalPopulation: 4530
  },
  {
    year: 2007,
    totalPopulation: 4484
  },
  {
    year: 2043,
    totalPopulation: 4413
  },
  {
    year: 2002,
    totalPopulation: 4497
  },
  {
    year: 2013,
    totalPopulation: 4485
  },
  {
    year: 2047,
    totalPopulation: 4382
  },
  {
    year: 2023,
    totalPopulation: 4540
  },
  {
    year: 2018,
    totalPopulation: 4517
  },
  {
    year: 2040,
    totalPopulation: 4439
  },
  {
    year: 2039,
    totalPopulation: 4443
  },
  {
    year: 1998,
    totalPopulation: 4565
  },
  {
    year: 2048,
    totalPopulation: 4375
  },
  {
    year: 2022,
    totalPopulation: 4540
  },
  {
    year: 2031,
    totalPopulation: 4507
  }
];
const Yuma = [
  {
    year: 2041,
    totalPopulation: 10124
  },
  {
    year: 2030,
    totalPopulation: 10197
  },
  {
    year: 1995,
    totalPopulation: 9446
  },
  {
    year: 2001,
    totalPopulation: 9833
  },
  {
    year: 2029,
    totalPopulation: 10199
  },
  {
    year: 2045,
    totalPopulation: 10029
  },
  {
    year: 2005,
    totalPopulation: 9891
  },
  {
    year: 1993,
    totalPopulation: 9172
  },
  {
    year: 2021,
    totalPopulation: 9997
  },
  {
    year: 2014,
    totalPopulation: 10181
  },
  {
    year: 2017,
    totalPopulation: 9970
  },
  {
    year: 2032,
    totalPopulation: 10178
  },
  {
    year: 2037,
    totalPopulation: 10167
  },
  {
    year: 2042,
    totalPopulation: 10110
  },
  {
    year: 2007,
    totalPopulation: 9882
  },
  {
    year: 1990,
    totalPopulation: 8954
  },
  {
    year: 2038,
    totalPopulation: 10151
  },
  {
    year: 1992,
    totalPopulation: 9008
  },
  {
    year: 2023,
    totalPopulation: 10027
  },
  {
    year: 2024,
    totalPopulation: 10050
  },
  {
    year: 1996,
    totalPopulation: 9521
  },
  {
    year: 2036,
    totalPopulation: 10164
  },
  {
    year: 2003,
    totalPopulation: 10093
  },
  {
    year: 2008,
    totalPopulation: 9895
  },
  {
    year: 2028,
    totalPopulation: 10200
  },
  {
    year: 2009,
    totalPopulation: 10032
  },
  {
    year: 2013,
    totalPopulation: 10138
  },
  {
    year: 2e3,
    totalPopulation: 9815
  },
  {
    year: 2020,
    totalPopulation: 9999
  },
  {
    year: 2012,
    totalPopulation: 10077
  },
  {
    year: 2004,
    totalPopulation: 9887
  },
  {
    year: 2006,
    totalPopulation: 9919
  },
  {
    year: 2049,
    totalPopulation: 9900
  },
  {
    year: 2016,
    totalPopulation: 10051
  },
  {
    year: 1999,
    totalPopulation: 9818
  },
  {
    year: 1994,
    totalPopulation: 9278
  },
  {
    year: 2027,
    totalPopulation: 10163
  },
  {
    year: 2043,
    totalPopulation: 10086
  },
  {
    year: 2011,
    totalPopulation: 10110
  },
  {
    year: 1997,
    totalPopulation: 9655
  },
  {
    year: 2022,
    totalPopulation: 10010
  },
  {
    year: 2002,
    totalPopulation: 9949
  },
  {
    year: 1998,
    totalPopulation: 9806
  },
  {
    year: 2047,
    totalPopulation: 9971
  },
  {
    year: 2010,
    totalPopulation: 10032
  },
  {
    year: 2019,
    totalPopulation: 10006
  },
  {
    year: 2031,
    totalPopulation: 10189
  },
  {
    year: 2026,
    totalPopulation: 10127
  },
  {
    year: 2018,
    totalPopulation: 9956
  },
  {
    year: 2033,
    totalPopulation: 10172
  },
  {
    year: 2015,
    totalPopulation: 10041
  },
  {
    year: 2050,
    totalPopulation: 9857
  },
  {
    year: 2044,
    totalPopulation: 10060
  },
  {
    year: 2039,
    totalPopulation: 10152
  },
  {
    year: 2046,
    totalPopulation: 9998
  },
  {
    year: 2034,
    totalPopulation: 10172
  },
  {
    year: 2035,
    totalPopulation: 10166
  },
  {
    year: 2025,
    totalPopulation: 10082
  },
  {
    year: 2040,
    totalPopulation: 10140
  },
  {
    year: 1991,
    totalPopulation: 9007
  },
  {
    year: 2048,
    totalPopulation: 9936
  }
];
const Moffat = [
  {
    year: 2001,
    totalPopulation: 13090
  },
  {
    year: 2046,
    totalPopulation: 11842
  },
  {
    year: 2008,
    totalPopulation: 13443
  },
  {
    year: 2044,
    totalPopulation: 11983
  },
  {
    year: 2006,
    totalPopulation: 13105
  },
  {
    year: 2e3,
    totalPopulation: 13182
  },
  {
    year: 2022,
    totalPopulation: 13243
  },
  {
    year: 2050,
    totalPopulation: 11541
  },
  {
    year: 2032,
    totalPopulation: 12716
  },
  {
    year: 2027,
    totalPopulation: 12971
  },
  {
    year: 2043,
    totalPopulation: 12057
  },
  {
    year: 1990,
    totalPopulation: 11357
  },
  {
    year: 2014,
    totalPopulation: 13012
  },
  {
    year: 2033,
    totalPopulation: 12653
  },
  {
    year: 2037,
    totalPopulation: 12424
  },
  {
    year: 2018,
    totalPopulation: 13292
  },
  {
    year: 2049,
    totalPopulation: 11607
  },
  {
    year: 1991,
    totalPopulation: 11453
  },
  {
    year: 2013,
    totalPopulation: 13192
  },
  {
    year: 2016,
    totalPopulation: 13266
  },
  {
    year: 2010,
    totalPopulation: 13806
  },
  {
    year: 2047,
    totalPopulation: 11763
  },
  {
    year: 2015,
    totalPopulation: 13039
  },
  {
    year: 1999,
    totalPopulation: 13026
  },
  {
    year: 2012,
    totalPopulation: 13214
  },
  {
    year: 1994,
    totalPopulation: 11997
  },
  {
    year: 1992,
    totalPopulation: 11697
  },
  {
    year: 1996,
    totalPopulation: 12285
  },
  {
    year: 2039,
    totalPopulation: 12314
  },
  {
    year: 2036,
    totalPopulation: 12488
  },
  {
    year: 2031,
    totalPopulation: 12757
  },
  {
    year: 2034,
    totalPopulation: 12594
  },
  {
    year: 2026,
    totalPopulation: 13030
  },
  {
    year: 1995,
    totalPopulation: 12189
  },
  {
    year: 2025,
    totalPopulation: 13086
  },
  {
    year: 2035,
    totalPopulation: 12541
  },
  {
    year: 2045,
    totalPopulation: 11915
  },
  {
    year: 2028,
    totalPopulation: 12920
  },
  {
    year: 2024,
    totalPopulation: 13137
  },
  {
    year: 1997,
    totalPopulation: 12573
  },
  {
    year: 2030,
    totalPopulation: 12813
  },
  {
    year: 2041,
    totalPopulation: 12193
  },
  {
    year: 2040,
    totalPopulation: 12258
  },
  {
    year: 2042,
    totalPopulation: 12121
  },
  {
    year: 2007,
    totalPopulation: 13273
  },
  {
    year: 2002,
    totalPopulation: 13127
  },
  {
    year: 2003,
    totalPopulation: 13053
  },
  {
    year: 2021,
    totalPopulation: 13300
  },
  {
    year: 2005,
    totalPopulation: 12962
  },
  {
    year: 2048,
    totalPopulation: 11685
  },
  {
    year: 2023,
    totalPopulation: 13198
  },
  {
    year: 1998,
    totalPopulation: 12810
  },
  {
    year: 2019,
    totalPopulation: 13361
  },
  {
    year: 2009,
    totalPopulation: 13540
  },
  {
    year: 2004,
    totalPopulation: 13061
  },
  {
    year: 2020,
    totalPopulation: 13288
  },
  {
    year: 2011,
    totalPopulation: 13452
  },
  {
    year: 2038,
    totalPopulation: 12374
  },
  {
    year: 2017,
    totalPopulation: 13225
  },
  {
    year: 1993,
    totalPopulation: 11797
  },
  {
    year: 2029,
    totalPopulation: 12865
  }
];
const Prowers = [
  {
    year: 1992,
    totalPopulation: 13102
  },
  {
    year: 2008,
    totalPopulation: 12687
  },
  {
    year: 2002,
    totalPopulation: 14006
  },
  {
    year: 2006,
    totalPopulation: 13210
  },
  {
    year: 2004,
    totalPopulation: 13659
  },
  {
    year: 2029,
    totalPopulation: 11628
  },
  {
    year: 2017,
    totalPopulation: 11930
  },
  {
    year: 2025,
    totalPopulation: 11834
  },
  {
    year: 2037,
    totalPopulation: 11112
  },
  {
    year: 2030,
    totalPopulation: 11568
  },
  {
    year: 2003,
    totalPopulation: 13824
  },
  {
    year: 1996,
    totalPopulation: 14009
  },
  {
    year: 2044,
    totalPopulation: 10562
  },
  {
    year: 1999,
    totalPopulation: 14372
  },
  {
    year: 2031,
    totalPopulation: 11507
  },
  {
    year: 2034,
    totalPopulation: 11320
  },
  {
    year: 1993,
    totalPopulation: 13420
  },
  {
    year: 2014,
    totalPopulation: 12022
  },
  {
    year: 2045,
    totalPopulation: 10475
  },
  {
    year: 2035,
    totalPopulation: 11252
  },
  {
    year: 2047,
    totalPopulation: 10295
  },
  {
    year: 1990,
    totalPopulation: 13240
  },
  {
    year: 2011,
    totalPopulation: 12482
  },
  {
    year: 2026,
    totalPopulation: 11780
  },
  {
    year: 2018,
    totalPopulation: 11969
  },
  {
    year: 2005,
    totalPopulation: 13509
  },
  {
    year: 2027,
    totalPopulation: 11736
  },
  {
    year: 2021,
    totalPopulation: 12015
  },
  {
    year: 2015,
    totalPopulation: 11885
  },
  {
    year: 2016,
    totalPopulation: 11884
  },
  {
    year: 2048,
    totalPopulation: 10196
  },
  {
    year: 2050,
    totalPopulation: 10001
  },
  {
    year: 2022,
    totalPopulation: 11973
  },
  {
    year: 2043,
    totalPopulation: 10648
  },
  {
    year: 2038,
    totalPopulation: 11041
  },
  {
    year: 2040,
    totalPopulation: 10886
  },
  {
    year: 2020,
    totalPopulation: 12015
  },
  {
    year: 2019,
    totalPopulation: 12013
  },
  {
    year: 2024,
    totalPopulation: 11879
  },
  {
    year: 2013,
    totalPopulation: 12287
  },
  {
    year: 2001,
    totalPopulation: 14106
  },
  {
    year: 2039,
    totalPopulation: 10966
  },
  {
    year: 2032,
    totalPopulation: 11448
  },
  {
    year: 2028,
    totalPopulation: 11683
  },
  {
    year: 2049,
    totalPopulation: 10097
  },
  {
    year: 2042,
    totalPopulation: 10731
  },
  {
    year: 1998,
    totalPopulation: 14223
  },
  {
    year: 2041,
    totalPopulation: 10814
  },
  {
    year: 2010,
    totalPopulation: 12531
  },
  {
    year: 2046,
    totalPopulation: 10381
  },
  {
    year: 2033,
    totalPopulation: 11379
  },
  {
    year: 2036,
    totalPopulation: 11182
  },
  {
    year: 1991,
    totalPopulation: 12961
  },
  {
    year: 2023,
    totalPopulation: 11935
  },
  {
    year: 2e3,
    totalPopulation: 14452
  },
  {
    year: 2012,
    totalPopulation: 12394
  },
  {
    year: 2009,
    totalPopulation: 12577
  },
  {
    year: 1994,
    totalPopulation: 13693
  },
  {
    year: 1997,
    totalPopulation: 14118
  },
  {
    year: 2007,
    totalPopulation: 12777
  },
  {
    year: 1995,
    totalPopulation: 13822
  }
];
const Park = [
  {
    year: 2027,
    totalPopulation: 18397
  },
  {
    year: 2004,
    totalPopulation: 15914
  },
  {
    year: 1998,
    totalPopulation: 13061
  },
  {
    year: 2026,
    totalPopulation: 18251
  },
  {
    year: 1999,
    totalPopulation: 13904
  },
  {
    year: 2032,
    totalPopulation: 18920
  },
  {
    year: 2023,
    totalPopulation: 17721
  },
  {
    year: 2024,
    totalPopulation: 17911
  },
  {
    year: 2031,
    totalPopulation: 18849
  },
  {
    year: 2034,
    totalPopulation: 19033
  },
  {
    year: 2049,
    totalPopulation: 18670
  },
  {
    year: 1995,
    totalPopulation: 10575
  },
  {
    year: 2005,
    totalPopulation: 16063
  },
  {
    year: 2020,
    totalPopulation: 17427
  },
  {
    year: 2e3,
    totalPopulation: 14728
  },
  {
    year: 2011,
    totalPopulation: 15896
  },
  {
    year: 2015,
    totalPopulation: 15974
  },
  {
    year: 2043,
    totalPopulation: 18902
  },
  {
    year: 2036,
    totalPopulation: 19067
  },
  {
    year: 2003,
    totalPopulation: 15787
  },
  {
    year: 1992,
    totalPopulation: 8089
  },
  {
    year: 2007,
    totalPopulation: 16337
  },
  {
    year: 2042,
    totalPopulation: 18942
  },
  {
    year: 2044,
    totalPopulation: 18866
  },
  {
    year: 2035,
    totalPopulation: 19051
  },
  {
    year: 2045,
    totalPopulation: 18823
  },
  {
    year: 2048,
    totalPopulation: 18699
  },
  {
    year: 1991,
    totalPopulation: 7699
  },
  {
    year: 2050,
    totalPopulation: 18631
  },
  {
    year: 2030,
    totalPopulation: 18756
  },
  {
    year: 2022,
    totalPopulation: 17519
  },
  {
    year: 2008,
    totalPopulation: 16277
  },
  {
    year: 2038,
    totalPopulation: 19057
  },
  {
    year: 2002,
    totalPopulation: 15415
  },
  {
    year: 2001,
    totalPopulation: 15175
  },
  {
    year: 2029,
    totalPopulation: 18653
  },
  {
    year: 1990,
    totalPopulation: 7260
  },
  {
    year: 2025,
    totalPopulation: 18084
  },
  {
    year: 2019,
    totalPopulation: 17515
  },
  {
    year: 2047,
    totalPopulation: 18739
  },
  {
    year: 1996,
    totalPopulation: 11382
  },
  {
    year: 2039,
    totalPopulation: 19040
  },
  {
    year: 2009,
    totalPopulation: 15965
  },
  {
    year: 2012,
    totalPopulation: 15737
  },
  {
    year: 2046,
    totalPopulation: 18782
  },
  {
    year: 2016,
    totalPopulation: 16464
  },
  {
    year: 2014,
    totalPopulation: 15778
  },
  {
    year: 2041,
    totalPopulation: 18972
  },
  {
    year: 1997,
    totalPopulation: 12364
  },
  {
    year: 2010,
    totalPopulation: 16262
  },
  {
    year: 2040,
    totalPopulation: 19011
  },
  {
    year: 2021,
    totalPopulation: 17352
  },
  {
    year: 1994,
    totalPopulation: 9526
  },
  {
    year: 2017,
    totalPopulation: 16863
  },
  {
    year: 2018,
    totalPopulation: 17369
  },
  {
    year: 2006,
    totalPopulation: 16129
  },
  {
    year: 2033,
    totalPopulation: 18978
  },
  {
    year: 2028,
    totalPopulation: 18534
  },
  {
    year: 2037,
    totalPopulation: 19069
  },
  {
    year: 1993,
    totalPopulation: 8575
  },
  {
    year: 2013,
    totalPopulation: 15727
  }
];
const Mesa = [
  {
    year: 2034,
    totalPopulation: 190130
  },
  {
    year: 2018,
    totalPopulation: 154045
  },
  {
    year: 2036,
    totalPopulation: 195763
  },
  {
    year: 2044,
    totalPopulation: 215254
  },
  {
    year: 1999,
    totalPopulation: 114570
  },
  {
    year: 2033,
    totalPopulation: 187219
  },
  {
    year: 2046,
    totalPopulation: 219323
  },
  {
    year: 2027,
    totalPopulation: 169234
  },
  {
    year: 1995,
    totalPopulation: 105412
  },
  {
    year: 2040,
    totalPopulation: 206151
  },
  {
    year: 2002,
    totalPopulation: 121786
  },
  {
    year: 2024,
    totalPopulation: 161643
  },
  {
    year: 2010,
    totalPopulation: 147155
  },
  {
    year: 1992,
    totalPopulation: 97408
  },
  {
    year: 2037,
    totalPopulation: 198476
  },
  {
    year: 2004,
    totalPopulation: 126625
  },
  {
    year: 2050,
    totalPopulation: 226581
  },
  {
    year: 2001,
    totalPopulation: 119864
  },
  {
    year: 2020,
    totalPopulation: 155910
  },
  {
    year: 1990,
    totalPopulation: 93572
  },
  {
    year: 2023,
    totalPopulation: 159725
  },
  {
    year: 2015,
    totalPopulation: 148778
  },
  {
    year: 2026,
    totalPopulation: 166569
  },
  {
    year: 2031,
    totalPopulation: 181227
  },
  {
    year: 2048,
    totalPopulation: 223093
  },
  {
    year: 2047,
    totalPopulation: 221238
  },
  {
    year: 2011,
    totalPopulation: 147953
  },
  {
    year: 2022,
    totalPopulation: 158045
  },
  {
    year: 1996,
    totalPopulation: 107536
  },
  {
    year: 1997,
    totalPopulation: 109762
  },
  {
    year: 2041,
    totalPopulation: 208556
  },
  {
    year: 2035,
    totalPopulation: 192986
  },
  {
    year: 2021,
    totalPopulation: 156704
  },
  {
    year: 2014,
    totalPopulation: 147874
  },
  {
    year: 2049,
    totalPopulation: 224867
  },
  {
    year: 2029,
    totalPopulation: 175031
  },
  {
    year: 2042,
    totalPopulation: 210865
  },
  {
    year: 2008,
    totalPopulation: 140678
  },
  {
    year: 2043,
    totalPopulation: 213104
  },
  {
    year: 2039,
    totalPopulation: 203677
  },
  {
    year: 2045,
    totalPopulation: 217324
  },
  {
    year: 2019,
    totalPopulation: 155109
  },
  {
    year: 2007,
    totalPopulation: 137389
  },
  {
    year: 2005,
    totalPopulation: 128998
  },
  {
    year: 2006,
    totalPopulation: 133129
  },
  {
    year: 2025,
    totalPopulation: 163910
  },
  {
    year: 2012,
    totalPopulation: 147941
  },
  {
    year: 2016,
    totalPopulation: 150345
  },
  {
    year: 1993,
    totalPopulation: 99901
  },
  {
    year: 2030,
    totalPopulation: 178155
  },
  {
    year: 2e3,
    totalPopulation: 117649
  },
  {
    year: 1994,
    totalPopulation: 102757
  },
  {
    year: 2003,
    totalPopulation: 124150
  },
  {
    year: 2013,
    totalPopulation: 147928
  },
  {
    year: 2017,
    totalPopulation: 152150
  },
  {
    year: 1998,
    totalPopulation: 112335
  },
  {
    year: 2032,
    totalPopulation: 184251
  },
  {
    year: 2038,
    totalPopulation: 201107
  },
  {
    year: 2028,
    totalPopulation: 172020
  },
  {
    year: 1991,
    totalPopulation: 95990
  },
  {
    year: 2009,
    totalPopulation: 144794
  }
];
const Grand = [
  {
    year: 2024,
    totalPopulation: 16171
  },
  {
    year: 1993,
    totalPopulation: 8930
  },
  {
    year: 2016,
    totalPopulation: 15042
  },
  {
    year: 1995,
    totalPopulation: 9952
  },
  {
    year: 2021,
    totalPopulation: 15719
  },
  {
    year: 2027,
    totalPopulation: 16536
  },
  {
    year: 2034,
    totalPopulation: 17553
  },
  {
    year: 2030,
    totalPopulation: 16939
  },
  {
    year: 2047,
    totalPopulation: 19180
  },
  {
    year: 2007,
    totalPopulation: 14341
  },
  {
    year: 2002,
    totalPopulation: 13458
  },
  {
    year: 1997,
    totalPopulation: 10960
  },
  {
    year: 2037,
    totalPopulation: 17988
  },
  {
    year: 2020,
    totalPopulation: 15711
  },
  {
    year: 2003,
    totalPopulation: 13681
  },
  {
    year: 2031,
    totalPopulation: 17095
  },
  {
    year: 2012,
    totalPopulation: 14925
  },
  {
    year: 2026,
    totalPopulation: 16433
  },
  {
    year: 2046,
    totalPopulation: 19083
  },
  {
    year: 1996,
    totalPopulation: 10512
  },
  {
    year: 2025,
    totalPopulation: 16293
  },
  {
    year: 2028,
    totalPopulation: 16649
  },
  {
    year: 2038,
    totalPopulation: 18127
  },
  {
    year: 2035,
    totalPopulation: 17698
  },
  {
    year: 2040,
    totalPopulation: 18391
  },
  {
    year: 2e3,
    totalPopulation: 12852
  },
  {
    year: 1991,
    totalPopulation: 8391
  },
  {
    year: 2017,
    totalPopulation: 15144
  },
  {
    year: 2019,
    totalPopulation: 15406
  },
  {
    year: 2033,
    totalPopulation: 17405
  },
  {
    year: 2006,
    totalPopulation: 14137
  },
  {
    year: 2050,
    totalPopulation: 19465
  },
  {
    year: 1990,
    totalPopulation: 7967
  },
  {
    year: 2041,
    totalPopulation: 18525
  },
  {
    year: 2004,
    totalPopulation: 13917
  },
  {
    year: 2044,
    totalPopulation: 18869
  },
  {
    year: 2008,
    totalPopulation: 14531
  },
  {
    year: 2029,
    totalPopulation: 16790
  },
  {
    year: 1999,
    totalPopulation: 11996
  },
  {
    year: 1992,
    totalPopulation: 8605
  },
  {
    year: 1998,
    totalPopulation: 11411
  },
  {
    year: 2022,
    totalPopulation: 15860
  },
  {
    year: 2011,
    totalPopulation: 14843
  },
  {
    year: 2045,
    totalPopulation: 18982
  },
  {
    year: 2036,
    totalPopulation: 17848
  },
  {
    year: 2010,
    totalPopulation: 14790
  },
  {
    year: 2032,
    totalPopulation: 17251
  },
  {
    year: 2049,
    totalPopulation: 19372
  },
  {
    year: 2009,
    totalPopulation: 14660
  },
  {
    year: 2005,
    totalPopulation: 13893
  },
  {
    year: 1994,
    totalPopulation: 9348
  },
  {
    year: 2018,
    totalPopulation: 15262
  },
  {
    year: 2048,
    totalPopulation: 19279
  },
  {
    year: 2013,
    totalPopulation: 14948
  },
  {
    year: 2001,
    totalPopulation: 13282
  },
  {
    year: 2042,
    totalPopulation: 18641
  },
  {
    year: 2014,
    totalPopulation: 14932
  },
  {
    year: 2023,
    totalPopulation: 16032
  },
  {
    year: 2039,
    totalPopulation: 18261
  },
  {
    year: 2043,
    totalPopulation: 18762
  },
  {
    year: 2015,
    totalPopulation: 14958
  }
];
const Boulder = [
  {
    year: 2026,
    totalPopulation: 342175
  },
  {
    year: 2009,
    totalPopulation: 293641
  },
  {
    year: 1991,
    totalPopulation: 230977
  },
  {
    year: 2012,
    totalPopulation: 305880
  },
  {
    year: 1990,
    totalPopulation: 226022
  },
  {
    year: 2002,
    totalPopulation: 284434
  },
  {
    year: 2039,
    totalPopulation: 379447
  },
  {
    year: 2033,
    totalPopulation: 363468
  },
  {
    year: 2050,
    totalPopulation: 396766
  },
  {
    year: 1995,
    totalPopulation: 257502
  },
  {
    year: 1992,
    totalPopulation: 238392
  },
  {
    year: 2041,
    totalPopulation: 384166
  },
  {
    year: 1996,
    totalPopulation: 261769
  },
  {
    year: 2043,
    totalPopulation: 388238
  },
  {
    year: 2001,
    totalPopulation: 283508
  },
  {
    year: 2018,
    totalPopulation: 328058
  },
  {
    year: 2038,
    totalPopulation: 376967
  },
  {
    year: 2021,
    totalPopulation: 332892
  },
  {
    year: 2005,
    totalPopulation: 282913
  },
  {
    year: 2016,
    totalPopulation: 323957
  },
  {
    year: 2019,
    totalPopulation: 328830
  },
  {
    year: 2013,
    totalPopulation: 310897
  },
  {
    year: 2047,
    totalPopulation: 394141
  },
  {
    year: 2031,
    totalPopulation: 357688
  },
  {
    year: 2003,
    totalPopulation: 282761
  },
  {
    year: 2010,
    totalPopulation: 295605
  },
  {
    year: 2007,
    totalPopulation: 288754
  },
  {
    year: 2014,
    totalPopulation: 314218
  },
  {
    year: 2e3,
    totalPopulation: 276254
  },
  {
    year: 2029,
    totalPopulation: 351771
  },
  {
    year: 2006,
    totalPopulation: 286134
  },
  {
    year: 2036,
    totalPopulation: 371769
  },
  {
    year: 2011,
    totalPopulation: 300524
  },
  {
    year: 2030,
    totalPopulation: 354737
  },
  {
    year: 1997,
    totalPopulation: 266064
  },
  {
    year: 2024,
    totalPopulation: 337299
  },
  {
    year: 2045,
    totalPopulation: 391554
  },
  {
    year: 2008,
    totalPopulation: 291826
  },
  {
    year: 2023,
    totalPopulation: 335344
  },
  {
    year: 2028,
    totalPopulation: 348582
  },
  {
    year: 2022,
    totalPopulation: 334015
  },
  {
    year: 2015,
    totalPopulation: 320350
  },
  {
    year: 2049,
    totalPopulation: 396041
  },
  {
    year: 2027,
    totalPopulation: 345380
  },
  {
    year: 2044,
    totalPopulation: 389991
  },
  {
    year: 1998,
    totalPopulation: 274121
  },
  {
    year: 1994,
    totalPopulation: 252726
  },
  {
    year: 2032,
    totalPopulation: 360600
  },
  {
    year: 2017,
    totalPopulation: 325420
  },
  {
    year: 2042,
    totalPopulation: 386292
  },
  {
    year: 2048,
    totalPopulation: 395173
  },
  {
    year: 2034,
    totalPopulation: 366290
  },
  {
    year: 2037,
    totalPopulation: 374404
  },
  {
    year: 2025,
    totalPopulation: 339366
  },
  {
    year: 1999,
    totalPopulation: 283928
  },
  {
    year: 2004,
    totalPopulation: 283288
  },
  {
    year: 2040,
    totalPopulation: 381850
  },
  {
    year: 2046,
    totalPopulation: 392931
  },
  {
    year: 2020,
    totalPopulation: 330859
  },
  {
    year: 1993,
    totalPopulation: 247282
  },
  {
    year: 2035,
    totalPopulation: 369059
  }
];
const Jefferson = [
  {
    year: 2038,
    totalPopulation: 629288
  },
  {
    year: 2021,
    totalPopulation: 582978
  },
  {
    year: 2048,
    totalPopulation: 637334
  },
  {
    year: 1996,
    totalPopulation: 498048
  },
  {
    year: 2013,
    totalPopulation: 552241
  },
  {
    year: 2028,
    totalPopulation: 606176
  },
  {
    year: 2045,
    totalPopulation: 636766
  },
  {
    year: 2014,
    totalPopulation: 559017
  },
  {
    year: 1993,
    totalPopulation: 476206
  },
  {
    year: 2007,
    totalPopulation: 527121
  },
  {
    year: 2049,
    totalPopulation: 637090
  },
  {
    year: 2001,
    totalPopulation: 528070
  },
  {
    year: 2016,
    totalPopulation: 571744
  },
  {
    year: 2022,
    totalPopulation: 586506
  },
  {
    year: 2018,
    totalPopulation: 579822
  },
  {
    year: 1997,
    totalPopulation: 504230
  },
  {
    year: 2023,
    totalPopulation: 590163
  },
  {
    year: 2050,
    totalPopulation: 636783
  },
  {
    year: 2044,
    totalPopulation: 636089
  },
  {
    year: 2035,
    totalPopulation: 623862
  },
  {
    year: 1999,
    totalPopulation: 520811
  },
  {
    year: 2026,
    totalPopulation: 600055
  },
  {
    year: 2009,
    totalPopulation: 532604
  },
  {
    year: 2008,
    totalPopulation: 530564
  },
  {
    year: 2012,
    totalPopulation: 546628
  },
  {
    year: 2e3,
    totalPopulation: 526716
  },
  {
    year: 1998,
    totalPopulation: 512482
  },
  {
    year: 2010,
    totalPopulation: 535651
  },
  {
    year: 2019,
    totalPopulation: 582571
  },
  {
    year: 1991,
    totalPopulation: 449663
  },
  {
    year: 2030,
    totalPopulation: 611913
  },
  {
    year: 2047,
    totalPopulation: 637492
  },
  {
    year: 2029,
    totalPopulation: 609098
  },
  {
    year: 2033,
    totalPopulation: 619510
  },
  {
    year: 2003,
    totalPopulation: 525428
  },
  {
    year: 2041,
    totalPopulation: 633329
  },
  {
    year: 2046,
    totalPopulation: 637331
  },
  {
    year: 2004,
    totalPopulation: 524880
  },
  {
    year: 2024,
    totalPopulation: 593619
  },
  {
    year: 2034,
    totalPopulation: 621764
  },
  {
    year: 2005,
    totalPopulation: 523518
  },
  {
    year: 2040,
    totalPopulation: 632139
  },
  {
    year: 2017,
    totalPopulation: 575924
  },
  {
    year: 2042,
    totalPopulation: 634386
  },
  {
    year: 2006,
    totalPopulation: 524579
  },
  {
    year: 2043,
    totalPopulation: 635305
  },
  {
    year: 2031,
    totalPopulation: 614591
  },
  {
    year: 2011,
    totalPopulation: 540625
  },
  {
    year: 1990,
    totalPopulation: 439886
  },
  {
    year: 2032,
    totalPopulation: 617123
  },
  {
    year: 2036,
    totalPopulation: 625828
  },
  {
    year: 2037,
    totalPopulation: 627639
  },
  {
    year: 2020,
    totalPopulation: 582780
  },
  {
    year: 1994,
    totalPopulation: 483432
  },
  {
    year: 2002,
    totalPopulation: 527541
  },
  {
    year: 2027,
    totalPopulation: 603160
  },
  {
    year: 1992,
    totalPopulation: 463534
  },
  {
    year: 1995,
    totalPopulation: 491314
  },
  {
    year: 2039,
    totalPopulation: 630781
  },
  {
    year: 2025,
    totalPopulation: 596798
  },
  {
    year: 2015,
    totalPopulation: 565161
  }
];
const Lincoln = [
  {
    year: 2009,
    totalPopulation: 5465
  },
  {
    year: 2001,
    totalPopulation: 6072
  },
  {
    year: 2017,
    totalPopulation: 5597
  },
  {
    year: 2035,
    totalPopulation: 6090
  },
  {
    year: 2045,
    totalPopulation: 6201
  },
  {
    year: 1993,
    totalPopulation: 5882
  },
  {
    year: 2015,
    totalPopulation: 5549
  },
  {
    year: 2016,
    totalPopulation: 5576
  },
  {
    year: 2008,
    totalPopulation: 5517
  },
  {
    year: 2042,
    totalPopulation: 6115
  },
  {
    year: 1991,
    totalPopulation: 5432
  },
  {
    year: 2e3,
    totalPopulation: 6164
  },
  {
    year: 2046,
    totalPopulation: 6232
  },
  {
    year: 2005,
    totalPopulation: 5789
  },
  {
    year: 2012,
    totalPopulation: 5501
  },
  {
    year: 2013,
    totalPopulation: 5517
  },
  {
    year: 2050,
    totalPopulation: 6370
  },
  {
    year: 2040,
    totalPopulation: 6102
  },
  {
    year: 2020,
    totalPopulation: 5658
  },
  {
    year: 2023,
    totalPopulation: 5791
  },
  {
    year: 2027,
    totalPopulation: 5951
  },
  {
    year: 2043,
    totalPopulation: 6136
  },
  {
    year: 1992,
    totalPopulation: 5972
  },
  {
    year: 2004,
    totalPopulation: 5905
  },
  {
    year: 2036,
    totalPopulation: 6093
  },
  {
    year: 2026,
    totalPopulation: 5917
  },
  {
    year: 2041,
    totalPopulation: 6107
  },
  {
    year: 2010,
    totalPopulation: 5474
  },
  {
    year: 2006,
    totalPopulation: 5668
  },
  {
    year: 1998,
    totalPopulation: 6106
  },
  {
    year: 2049,
    totalPopulation: 6336
  },
  {
    year: 2002,
    totalPopulation: 6046
  },
  {
    year: 1995,
    totalPopulation: 5984
  },
  {
    year: 2032,
    totalPopulation: 6064
  },
  {
    year: 1996,
    totalPopulation: 6113
  },
  {
    year: 2022,
    totalPopulation: 5746
  },
  {
    year: 2011,
    totalPopulation: 5488
  },
  {
    year: 2028,
    totalPopulation: 5968
  },
  {
    year: 1997,
    totalPopulation: 6092
  },
  {
    year: 2003,
    totalPopulation: 6058
  },
  {
    year: 2014,
    totalPopulation: 5542
  },
  {
    year: 2019,
    totalPopulation: 5645
  },
  {
    year: 2007,
    totalPopulation: 5570
  },
  {
    year: 1990,
    totalPopulation: 4715
  },
  {
    year: 2044,
    totalPopulation: 6166
  },
  {
    year: 2030,
    totalPopulation: 6021
  },
  {
    year: 2034,
    totalPopulation: 6086
  },
  {
    year: 2047,
    totalPopulation: 6266
  },
  {
    year: 2039,
    totalPopulation: 6102
  },
  {
    year: 2018,
    totalPopulation: 5622
  },
  {
    year: 2025,
    totalPopulation: 5866
  },
  {
    year: 2037,
    totalPopulation: 6092
  },
  {
    year: 2048,
    totalPopulation: 6302
  },
  {
    year: 2033,
    totalPopulation: 6077
  },
  {
    year: 1994,
    totalPopulation: 5936
  },
  {
    year: 2038,
    totalPopulation: 6095
  },
  {
    year: 2021,
    totalPopulation: 5677
  },
  {
    year: 2024,
    totalPopulation: 5825
  },
  {
    year: 2029,
    totalPopulation: 5996
  },
  {
    year: 2031,
    totalPopulation: 6047
  },
  {
    year: 1999,
    totalPopulation: 6088
  }
];
const Bent = [
  {
    year: 2003,
    totalPopulation: 6658
  },
  {
    year: 2048,
    totalPopulation: 5350
  },
  {
    year: 2039,
    totalPopulation: 5410
  },
  {
    year: 2022,
    totalPopulation: 5566
  },
  {
    year: 2026,
    totalPopulation: 5500
  },
  {
    year: 2010,
    totalPopulation: 6506
  },
  {
    year: 2014,
    totalPopulation: 5845
  },
  {
    year: 2012,
    totalPopulation: 5865
  },
  {
    year: 2013,
    totalPopulation: 5799
  },
  {
    year: 2036,
    totalPopulation: 5434
  },
  {
    year: 2034,
    totalPopulation: 5449
  },
  {
    year: 2043,
    totalPopulation: 5387
  },
  {
    year: 2008,
    totalPopulation: 6010
  },
  {
    year: 2035,
    totalPopulation: 5438
  },
  {
    year: 2042,
    totalPopulation: 5389
  },
  {
    year: 1993,
    totalPopulation: 5357
  },
  {
    year: 1991,
    totalPopulation: 4965
  },
  {
    year: 2019,
    totalPopulation: 5979
  },
  {
    year: 2018,
    totalPopulation: 5979
  },
  {
    year: 2011,
    totalPopulation: 6356
  },
  {
    year: 2017,
    totalPopulation: 5969
  },
  {
    year: 2002,
    totalPopulation: 6205
  },
  {
    year: 2021,
    totalPopulation: 5594
  },
  {
    year: 2029,
    totalPopulation: 5491
  },
  {
    year: 2046,
    totalPopulation: 5370
  },
  {
    year: 2049,
    totalPopulation: 5345
  },
  {
    year: 2041,
    totalPopulation: 5401
  },
  {
    year: 2025,
    totalPopulation: 5534
  },
  {
    year: 2004,
    totalPopulation: 6362
  },
  {
    year: 2037,
    totalPopulation: 5424
  },
  {
    year: 1996,
    totalPopulation: 5625
  },
  {
    year: 2006,
    totalPopulation: 6076
  },
  {
    year: 2033,
    totalPopulation: 5455
  },
  {
    year: 2020,
    totalPopulation: 5588
  },
  {
    year: 2e3,
    totalPopulation: 5966
  },
  {
    year: 2024,
    totalPopulation: 5539
  },
  {
    year: 2031,
    totalPopulation: 5467
  },
  {
    year: 2027,
    totalPopulation: 5503
  },
  {
    year: 1999,
    totalPopulation: 6001
  },
  {
    year: 1997,
    totalPopulation: 5643
  },
  {
    year: 2038,
    totalPopulation: 5422
  },
  {
    year: 1990,
    totalPopulation: 5048
  },
  {
    year: 2050,
    totalPopulation: 5340
  },
  {
    year: 2016,
    totalPopulation: 5754
  },
  {
    year: 1992,
    totalPopulation: 5037
  },
  {
    year: 2047,
    totalPopulation: 5356
  },
  {
    year: 2044,
    totalPopulation: 5375
  },
  {
    year: 1998,
    totalPopulation: 6001
  },
  {
    year: 2045,
    totalPopulation: 5367
  },
  {
    year: 2001,
    totalPopulation: 5878
  },
  {
    year: 1994,
    totalPopulation: 5401
  },
  {
    year: 2028,
    totalPopulation: 5498
  },
  {
    year: 2007,
    totalPopulation: 5770
  },
  {
    year: 2023,
    totalPopulation: 5552
  },
  {
    year: 2009,
    totalPopulation: 6484
  },
  {
    year: 2005,
    totalPopulation: 6262
  },
  {
    year: 2032,
    totalPopulation: 5464
  },
  {
    year: 2015,
    totalPopulation: 5965
  },
  {
    year: 2030,
    totalPopulation: 5483
  },
  {
    year: 2040,
    totalPopulation: 5408
  },
  {
    year: 1995,
    totalPopulation: 5555
  }
];
const Dolores = [
  {
    year: 2019,
    totalPopulation: 2085
  },
  {
    year: 2020,
    totalPopulation: 2083
  },
  {
    year: 1999,
    totalPopulation: 1810
  },
  {
    year: 2050,
    totalPopulation: 1700
  },
  {
    year: 2010,
    totalPopulation: 2060
  },
  {
    year: 2018,
    totalPopulation: 2090
  },
  {
    year: 2009,
    totalPopulation: 2051
  },
  {
    year: 2021,
    totalPopulation: 2091
  },
  {
    year: 1992,
    totalPopulation: 1401
  },
  {
    year: 2013,
    totalPopulation: 2082
  },
  {
    year: 2030,
    totalPopulation: 1990
  },
  {
    year: 2039,
    totalPopulation: 1859
  },
  {
    year: 2001,
    totalPopulation: 1861
  },
  {
    year: 2043,
    totalPopulation: 1796
  },
  {
    year: 1990,
    totalPopulation: 1504
  },
  {
    year: 2008,
    totalPopulation: 2074
  },
  {
    year: 2049,
    totalPopulation: 1715
  },
  {
    year: 2024,
    totalPopulation: 2057
  },
  {
    year: 2014,
    totalPopulation: 2081
  },
  {
    year: 2042,
    totalPopulation: 1812
  },
  {
    year: 2004,
    totalPopulation: 1870
  },
  {
    year: 2011,
    totalPopulation: 2053
  },
  {
    year: 2047,
    totalPopulation: 1742
  },
  {
    year: 2e3,
    totalPopulation: 1847
  },
  {
    year: 1996,
    totalPopulation: 1645
  },
  {
    year: 2028,
    totalPopulation: 2015
  },
  {
    year: 2025,
    totalPopulation: 2045
  },
  {
    year: 2044,
    totalPopulation: 1786
  },
  {
    year: 2017,
    totalPopulation: 2085
  },
  {
    year: 2002,
    totalPopulation: 1880
  },
  {
    year: 2034,
    totalPopulation: 1935
  },
  {
    year: 2005,
    totalPopulation: 1886
  },
  {
    year: 2048,
    totalPopulation: 1732
  },
  {
    year: 1994,
    totalPopulation: 1500
  },
  {
    year: 1997,
    totalPopulation: 1674
  },
  {
    year: 2027,
    totalPopulation: 2031
  },
  {
    year: 1991,
    totalPopulation: 1432
  },
  {
    year: 2007,
    totalPopulation: 2003
  },
  {
    year: 2023,
    totalPopulation: 2069
  },
  {
    year: 1998,
    totalPopulation: 1764
  },
  {
    year: 2029,
    totalPopulation: 2007
  },
  {
    year: 2040,
    totalPopulation: 1842
  },
  {
    year: 2015,
    totalPopulation: 2083
  },
  {
    year: 2046,
    totalPopulation: 1753
  },
  {
    year: 2038,
    totalPopulation: 1868
  },
  {
    year: 2031,
    totalPopulation: 1979
  },
  {
    year: 1995,
    totalPopulation: 1557
  },
  {
    year: 2037,
    totalPopulation: 1888
  },
  {
    year: 2022,
    totalPopulation: 2080
  },
  {
    year: 2006,
    totalPopulation: 1990
  },
  {
    year: 2026,
    totalPopulation: 2036
  },
  {
    year: 2016,
    totalPopulation: 2090
  },
  {
    year: 2032,
    totalPopulation: 1969
  },
  {
    year: 1993,
    totalPopulation: 1426
  },
  {
    year: 2045,
    totalPopulation: 1775
  },
  {
    year: 2003,
    totalPopulation: 1876
  },
  {
    year: 2036,
    totalPopulation: 1907
  },
  {
    year: 2033,
    totalPopulation: 1957
  },
  {
    year: 2041,
    totalPopulation: 1828
  },
  {
    year: 2012,
    totalPopulation: 2077
  },
  {
    year: 2035,
    totalPopulation: 1919
  }
];
const Adams = [
  {
    year: 2008,
    totalPopulation: 425134
  },
  {
    year: 2019,
    totalPopulation: 516480
  },
  {
    year: 2014,
    totalPopulation: 479904
  },
  {
    year: 2043,
    totalPopulation: 738267
  },
  {
    year: 2024,
    totalPopulation: 544466
  },
  {
    year: 2040,
    totalPopulation: 708641
  },
  {
    year: 1996,
    totalPopulation: 323039
  },
  {
    year: 2006,
    totalPopulation: 407588
  },
  {
    year: 2047,
    totalPopulation: 775785
  },
  {
    year: 2004,
    totalPopulation: 385940
  },
  {
    year: 2041,
    totalPopulation: 718670
  },
  {
    year: 1993,
    totalPopulation: 290782
  },
  {
    year: 2025,
    totalPopulation: 552929
  },
  {
    year: 2003,
    totalPopulation: 377669
  },
  {
    year: 2034,
    totalPopulation: 646904
  },
  {
    year: 2022,
    totalPopulation: 529891
  },
  {
    year: 2009,
    totalPopulation: 436321
  },
  {
    year: 2031,
    totalPopulation: 615243
  },
  {
    year: 2002,
    totalPopulation: 371182
  },
  {
    year: 2001,
    totalPopulation: 359441
  },
  {
    year: 2028,
    totalPopulation: 583731
  },
  {
    year: 2012,
    totalPopulation: 460468
  },
  {
    year: 2023,
    totalPopulation: 536458
  },
  {
    year: 2018,
    totalPopulation: 511420
  },
  {
    year: 1999,
    totalPopulation: 355309
  },
  {
    year: 2036,
    totalPopulation: 667710
  },
  {
    year: 2030,
    totalPopulation: 604681
  },
  {
    year: 1997,
    totalPopulation: 332750
  },
  {
    year: 2039,
    totalPopulation: 698529
  },
  {
    year: 2015,
    totalPopulation: 490355
  },
  {
    year: 2048,
    totalPopulation: 784836
  },
  {
    year: 2027,
    totalPopulation: 573373
  },
  {
    year: 2021,
    totalPopulation: 523654
  },
  {
    year: 2032,
    totalPopulation: 625844
  },
  {
    year: 2011,
    totalPopulation: 452184
  },
  {
    year: 2e3,
    totalPopulation: 351734
  },
  {
    year: 2049,
    totalPopulation: 793782
  },
  {
    year: 2026,
    totalPopulation: 563096
  },
  {
    year: 2042,
    totalPopulation: 728548
  },
  {
    year: 2050,
    totalPopulation: 802623
  },
  {
    year: 2029,
    totalPopulation: 594171
  },
  {
    year: 2035,
    totalPopulation: 657324
  },
  {
    year: 2038,
    totalPopulation: 688336
  },
  {
    year: 2017,
    totalPopulation: 503706
  },
  {
    year: 1995,
    totalPopulation: 312587
  },
  {
    year: 2007,
    totalPopulation: 415917
  },
  {
    year: 2045,
    totalPopulation: 757294
  },
  {
    year: 2033,
    totalPopulation: 636472
  },
  {
    year: 2005,
    totalPopulation: 395381
  },
  {
    year: 1992,
    totalPopulation: 281386
  },
  {
    year: 2037,
    totalPopulation: 678058
  },
  {
    year: 1998,
    totalPopulation: 344025
  },
  {
    year: 1990,
    totalPopulation: 265709
  },
  {
    year: 2044,
    totalPopulation: 747860
  },
  {
    year: 2010,
    totalPopulation: 443711
  },
  {
    year: 2013,
    totalPopulation: 469878
  },
  {
    year: 1991,
    totalPopulation: 273620
  },
  {
    year: 2020,
    totalPopulation: 520076
  },
  {
    year: 2016,
    totalPopulation: 497822
  },
  {
    year: 1994,
    totalPopulation: 300793
  },
  {
    year: 2046,
    totalPopulation: 766608
  }
];
const Gilpin = [
  {
    year: 2001,
    totalPopulation: 4830
  },
  {
    year: 2038,
    totalPopulation: 5607
  },
  {
    year: 1996,
    totalPopulation: 3789
  },
  {
    year: 2015,
    totalPopulation: 5546
  },
  {
    year: 2033,
    totalPopulation: 5646
  },
  {
    year: 2036,
    totalPopulation: 5635
  },
  {
    year: 2047,
    totalPopulation: 5398
  },
  {
    year: 1998,
    totalPopulation: 4241
  },
  {
    year: 2004,
    totalPopulation: 4826
  },
  {
    year: 2014,
    totalPopulation: 5537
  },
  {
    year: 2013,
    totalPopulation: 5511
  },
  {
    year: 2005,
    totalPopulation: 4893
  },
  {
    year: 2026,
    totalPopulation: 5746
  },
  {
    year: 2029,
    totalPopulation: 5680
  },
  {
    year: 2020,
    totalPopulation: 5799
  },
  {
    year: 1993,
    totalPopulation: 3372
  },
  {
    year: 2007,
    totalPopulation: 4956
  },
  {
    year: 2008,
    totalPopulation: 5084
  },
  {
    year: 2048,
    totalPopulation: 5379
  },
  {
    year: 1994,
    totalPopulation: 3499
  },
  {
    year: 2049,
    totalPopulation: 5362
  },
  {
    year: 1995,
    totalPopulation: 3670
  },
  {
    year: 2046,
    totalPopulation: 5427
  },
  {
    year: 2021,
    totalPopulation: 5823
  },
  {
    year: 2023,
    totalPopulation: 5793
  },
  {
    year: 2002,
    totalPopulation: 4834
  },
  {
    year: 2040,
    totalPopulation: 5562
  },
  {
    year: 2050,
    totalPopulation: 5332
  },
  {
    year: 2019,
    totalPopulation: 5750
  },
  {
    year: 2045,
    totalPopulation: 5449
  },
  {
    year: 2022,
    totalPopulation: 5810
  },
  {
    year: 2e3,
    totalPopulation: 4807
  },
  {
    year: 2010,
    totalPopulation: 5463
  },
  {
    year: 2003,
    totalPopulation: 4847
  },
  {
    year: 1990,
    totalPopulation: 3070
  },
  {
    year: 2030,
    totalPopulation: 5657
  },
  {
    year: 2011,
    totalPopulation: 5480
  },
  {
    year: 1991,
    totalPopulation: 3091
  },
  {
    year: 2043,
    totalPopulation: 5504
  },
  {
    year: 2032,
    totalPopulation: 5642
  },
  {
    year: 2016,
    totalPopulation: 5578
  },
  {
    year: 2006,
    totalPopulation: 4953
  },
  {
    year: 2024,
    totalPopulation: 5778
  },
  {
    year: 2018,
    totalPopulation: 5705
  },
  {
    year: 2041,
    totalPopulation: 5541
  },
  {
    year: 2028,
    totalPopulation: 5698
  },
  {
    year: 1997,
    totalPopulation: 4035
  },
  {
    year: 2017,
    totalPopulation: 5634
  },
  {
    year: 2009,
    totalPopulation: 5392
  },
  {
    year: 2034,
    totalPopulation: 5648
  },
  {
    year: 2039,
    totalPopulation: 5587
  },
  {
    year: 1992,
    totalPopulation: 3239
  },
  {
    year: 2031,
    totalPopulation: 5642
  },
  {
    year: 2037,
    totalPopulation: 5625
  },
  {
    year: 2035,
    totalPopulation: 5651
  },
  {
    year: 2044,
    totalPopulation: 5471
  },
  {
    year: 2042,
    totalPopulation: 5523
  },
  {
    year: 2027,
    totalPopulation: 5726
  },
  {
    year: 2012,
    totalPopulation: 5500
  },
  {
    year: 2025,
    totalPopulation: 5775
  },
  {
    year: 1999,
    totalPopulation: 4538
  }
];
const Logan = [
  {
    year: 1997,
    totalPopulation: 20006
  },
  {
    year: 2009,
    totalPopulation: 22515
  },
  {
    year: 1998,
    totalPopulation: 20001
  },
  {
    year: 2037,
    totalPopulation: 22640
  },
  {
    year: 2014,
    totalPopulation: 21964
  },
  {
    year: 2035,
    totalPopulation: 22512
  },
  {
    year: 2032,
    totalPopulation: 22327
  },
  {
    year: 2007,
    totalPopulation: 22402
  },
  {
    year: 2034,
    totalPopulation: 22454
  },
  {
    year: 2004,
    totalPopulation: 22178
  },
  {
    year: 2008,
    totalPopulation: 22320
  },
  {
    year: 1992,
    totalPopulation: 17567
  },
  {
    year: 2045,
    totalPopulation: 23029
  },
  {
    year: 2048,
    totalPopulation: 23134
  },
  {
    year: 2e3,
    totalPopulation: 20656
  },
  {
    year: 2011,
    totalPopulation: 22208
  },
  {
    year: 2003,
    totalPopulation: 22374
  },
  {
    year: 2018,
    totalPopulation: 21615
  },
  {
    year: 2046,
    totalPopulation: 23067
  },
  {
    year: 2026,
    totalPopulation: 21920
  },
  {
    year: 2042,
    totalPopulation: 22896
  },
  {
    year: 2043,
    totalPopulation: 22947
  },
  {
    year: 2012,
    totalPopulation: 22130
  },
  {
    year: 2016,
    totalPopulation: 21776
  },
  {
    year: 2038,
    totalPopulation: 22688
  },
  {
    year: 1994,
    totalPopulation: 18831
  },
  {
    year: 2006,
    totalPopulation: 22270
  },
  {
    year: 2013,
    totalPopulation: 22051
  },
  {
    year: 1996,
    totalPopulation: 19664
  },
  {
    year: 1993,
    totalPopulation: 17965
  },
  {
    year: 2030,
    totalPopulation: 22196
  },
  {
    year: 2050,
    totalPopulation: 23190
  },
  {
    year: 2044,
    totalPopulation: 22989
  },
  {
    year: 2039,
    totalPopulation: 22750
  },
  {
    year: 2041,
    totalPopulation: 22846
  },
  {
    year: 2001,
    totalPopulation: 22359
  },
  {
    year: 2023,
    totalPopulation: 21549
  },
  {
    year: 2019,
    totalPopulation: 21507
  },
  {
    year: 1999,
    totalPopulation: 20294
  },
  {
    year: 2028,
    totalPopulation: 22062
  },
  {
    year: 2025,
    totalPopulation: 21792
  },
  {
    year: 2015,
    totalPopulation: 21874
  },
  {
    year: 2033,
    totalPopulation: 22392
  },
  {
    year: 2021,
    totalPopulation: 21333
  },
  {
    year: 2022,
    totalPopulation: 21433
  },
  {
    year: 2017,
    totalPopulation: 21696
  },
  {
    year: 2024,
    totalPopulation: 21661
  },
  {
    year: 2005,
    totalPopulation: 22082
  },
  {
    year: 2036,
    totalPopulation: 22580
  },
  {
    year: 2010,
    totalPopulation: 22293
  },
  {
    year: 1991,
    totalPopulation: 17499
  },
  {
    year: 1990,
    totalPopulation: 17491
  },
  {
    year: 2049,
    totalPopulation: 23166
  },
  {
    year: 2047,
    totalPopulation: 23100
  },
  {
    year: 2040,
    totalPopulation: 22791
  },
  {
    year: 2031,
    totalPopulation: 22268
  },
  {
    year: 2029,
    totalPopulation: 22131
  },
  {
    year: 2027,
    totalPopulation: 21985
  },
  {
    year: 1995,
    totalPopulation: 19372
  },
  {
    year: 2020,
    totalPopulation: 21406
  },
  {
    year: 2002,
    totalPopulation: 22098
  }
];
const Summit = [
  {
    year: 2004,
    totalPopulation: 26705
  },
  {
    year: 2012,
    totalPopulation: 28386
  },
  {
    year: 2049,
    totalPopulation: 37085
  },
  {
    year: 2035,
    totalPopulation: 34106
  },
  {
    year: 2032,
    totalPopulation: 33420
  },
  {
    year: 2013,
    totalPopulation: 28861
  },
  {
    year: 2031,
    totalPopulation: 33188
  },
  {
    year: 1994,
    totalPopulation: 17107
  },
  {
    year: 2001,
    totalPopulation: 26290
  },
  {
    year: 2033,
    totalPopulation: 33643
  },
  {
    year: 2017,
    totalPopulation: 31135
  },
  {
    year: 2e3,
    totalPopulation: 25708
  },
  {
    year: 2034,
    totalPopulation: 33879
  },
  {
    year: 2005,
    totalPopulation: 26621
  },
  {
    year: 1999,
    totalPopulation: 22568
  },
  {
    year: 2038,
    totalPopulation: 34821
  },
  {
    year: 2029,
    totalPopulation: 32721
  },
  {
    year: 2008,
    totalPopulation: 27463
  },
  {
    year: 2018,
    totalPopulation: 31093
  },
  {
    year: 1995,
    totalPopulation: 18274
  },
  {
    year: 1991,
    totalPopulation: 13469
  },
  {
    year: 2043,
    totalPopulation: 35922
  },
  {
    year: 2026,
    totalPopulation: 31860
  },
  {
    year: 2015,
    totalPopulation: 30264
  },
  {
    year: 2027,
    totalPopulation: 32196
  },
  {
    year: 2011,
    totalPopulation: 28081
  },
  {
    year: 2036,
    totalPopulation: 34331
  },
  {
    year: 1992,
    totalPopulation: 13845
  },
  {
    year: 2014,
    totalPopulation: 29499
  },
  {
    year: 2016,
    totalPopulation: 30820
  },
  {
    year: 2021,
    totalPopulation: 30835
  },
  {
    year: 2010,
    totalPopulation: 28073
  },
  {
    year: 2041,
    totalPopulation: 35493
  },
  {
    year: 2040,
    totalPopulation: 35274
  },
  {
    year: 2024,
    totalPopulation: 31424
  },
  {
    year: 2048,
    totalPopulation: 36906
  },
  {
    year: 1998,
    totalPopulation: 21285
  },
  {
    year: 2003,
    totalPopulation: 26707
  },
  {
    year: 2025,
    totalPopulation: 31616
  },
  {
    year: 2019,
    totalPopulation: 31190
  },
  {
    year: 2047,
    totalPopulation: 36718
  },
  {
    year: 2028,
    totalPopulation: 32484
  },
  {
    year: 2007,
    totalPopulation: 27168
  },
  {
    year: 2022,
    totalPopulation: 31048
  },
  {
    year: 1997,
    totalPopulation: 20352
  },
  {
    year: 2006,
    totalPopulation: 26837
  },
  {
    year: 2037,
    totalPopulation: 34582
  },
  {
    year: 2050,
    totalPopulation: 37255
  },
  {
    year: 1990,
    totalPopulation: 12926
  },
  {
    year: 2009,
    totalPopulation: 27780
  },
  {
    year: 2042,
    totalPopulation: 35703
  },
  {
    year: 2020,
    totalPopulation: 31017
  },
  {
    year: 2045,
    totalPopulation: 36326
  },
  {
    year: 1993,
    totalPopulation: 15189
  },
  {
    year: 2044,
    totalPopulation: 36128
  },
  {
    year: 2023,
    totalPopulation: 31242
  },
  {
    year: 2002,
    totalPopulation: 26514
  },
  {
    year: 2030,
    totalPopulation: 32953
  },
  {
    year: 2046,
    totalPopulation: 36530
  },
  {
    year: 2039,
    totalPopulation: 35055
  },
  {
    year: 1996,
    totalPopulation: 19396
  }
];
const data = {
  "San Juan": [
    {
      year: 2004,
      totalPopulation: 634
    },
    {
      year: 1990,
      totalPopulation: 745
    },
    {
      year: 1991,
      totalPopulation: 703
    },
    {
      year: 2007,
      totalPopulation: 689
    },
    {
      year: 2037,
      totalPopulation: 662
    },
    {
      year: 2010,
      totalPopulation: 709
    },
    {
      year: 2035,
      totalPopulation: 665
    },
    {
      year: 2030,
      totalPopulation: 679
    },
    {
      year: 2006,
      totalPopulation: 673
    },
    {
      year: 2005,
      totalPopulation: 647
    },
    {
      year: 2043,
      totalPopulation: 671
    },
    {
      year: 2024,
      totalPopulation: 693
    },
    {
      year: 2020,
      totalPopulation: 706
    },
    {
      year: 1998,
      totalPopulation: 552
    },
    {
      year: 1997,
      totalPopulation: 572
    },
    {
      year: 2049,
      totalPopulation: 678
    },
    {
      year: 2047,
      totalPopulation: 678
    },
    {
      year: 2032,
      totalPopulation: 668
    },
    {
      year: 1992,
      totalPopulation: 575
    },
    {
      year: 2050,
      totalPopulation: 692
    },
    {
      year: 2038,
      totalPopulation: 661
    },
    {
      year: 2017,
      totalPopulation: 696
    },
    {
      year: 2029,
      totalPopulation: 685
    },
    {
      year: 2001,
      totalPopulation: 568
    },
    {
      year: 2046,
      totalPopulation: 678
    },
    {
      year: 2028,
      totalPopulation: 688
    },
    {
      year: 1996,
      totalPopulation: 591
    },
    {
      year: 2023,
      totalPopulation: 700
    },
    {
      year: 2016,
      totalPopulation: 697
    },
    {
      year: 2002,
      totalPopulation: 599
    },
    {
      year: 2018,
      totalPopulation: 702
    },
    {
      year: 2019,
      totalPopulation: 709
    },
    {
      year: 2025,
      totalPopulation: 699
    },
    {
      year: 2042,
      totalPopulation: 669
    },
    {
      year: 2011,
      totalPopulation: 710
    },
    {
      year: 2036,
      totalPopulation: 663
    },
    {
      year: 1994,
      totalPopulation: 558
    },
    {
      year: 2044,
      totalPopulation: 673
    },
    {
      year: 2045,
      totalPopulation: 675
    },
    {
      year: 2022,
      totalPopulation: 708
    },
    {
      year: 1993,
      totalPopulation: 541
    },
    {
      year: 2039,
      totalPopulation: 659
    },
    {
      year: 1999,
      totalPopulation: 552
    },
    {
      year: 2040,
      totalPopulation: 663
    },
    {
      year: 2027,
      totalPopulation: 692
    },
    {
      year: 2012,
      totalPopulation: 702
    },
    {
      year: 2009,
      totalPopulation: 681
    },
    {
      year: 2041,
      totalPopulation: 668
    },
    {
      year: 2e3,
      totalPopulation: 574
    },
    {
      year: 2031,
      totalPopulation: 677
    },
    {
      year: 2003,
      totalPopulation: 612
    },
    {
      year: 2021,
      totalPopulation: 704
    },
    {
      year: 2048,
      totalPopulation: 682
    },
    {
      year: 2026,
      totalPopulation: 696
    },
    {
      year: 2008,
      totalPopulation: 700
    },
    {
      year: 1995,
      totalPopulation: 581
    },
    {
      year: 2033,
      totalPopulation: 670
    },
    {
      year: 2034,
      totalPopulation: 665
    },
    {
      year: 2013,
      totalPopulation: 706
    },
    {
      year: 2014,
      totalPopulation: 702
    },
    {
      year: 2015,
      totalPopulation: 701
    }
  ],
  Pitkin,
  Teller,
  Weld,
  Costilla,
  "El Paso": [
    {
      year: 2039,
      totalPopulation: 922463
    },
    {
      year: 2012,
      totalPopulation: 648443
    },
    {
      year: 2029,
      totalPopulation: 821521
    },
    {
      year: 2020,
      totalPopulation: 731640
    },
    {
      year: 2038,
      totalPopulation: 913736
    },
    {
      year: 2037,
      totalPopulation: 904630
    },
    {
      year: 2033,
      totalPopulation: 864950
    },
    {
      year: 2041,
      totalPopulation: 938801
    },
    {
      year: 2016,
      totalPopulation: 692291
    },
    {
      year: 2019,
      totalPopulation: 725496
    },
    {
      year: 2005,
      totalPopulation: 569322
    },
    {
      year: 1994,
      totalPopulation: 456506
    },
    {
      year: 2014,
      totalPopulation: 665764
    },
    {
      year: 2045,
      totalPopulation: 966947
    },
    {
      year: 2002,
      totalPopulation: 545239
    },
    {
      year: 2036,
      totalPopulation: 895186
    },
    {
      year: 2001,
      totalPopulation: 536336
    },
    {
      year: 2049,
      totalPopulation: 989383
    },
    {
      year: 2043,
      totalPopulation: 953614
    },
    {
      year: 2003,
      totalPopulation: 551671
    },
    {
      year: 2021,
      totalPopulation: 737865
    },
    {
      year: 1995,
      totalPopulation: 469692
    },
    {
      year: 2018,
      totalPopulation: 717809
    },
    {
      year: 2011,
      totalPopulation: 639137
    },
    {
      year: 1998,
      totalPopulation: 498018
    },
    {
      year: 2008,
      totalPopulation: 599064
    },
    {
      year: 2022,
      totalPopulation: 746683
    },
    {
      year: 2017,
      totalPopulation: 704794
    },
    {
      year: 2009,
      totalPopulation: 608519
    },
    {
      year: 2006,
      totalPopulation: 582501
    },
    {
      year: 2048,
      totalPopulation: 984298
    },
    {
      year: 1992,
      totalPopulation: 422819
    },
    {
      year: 2046,
      totalPopulation: 973075
    },
    {
      year: 2e3,
      totalPopulation: 519803
    },
    {
      year: 2013,
      totalPopulation: 658299
    },
    {
      year: 1997,
      totalPopulation: 486808
    },
    {
      year: 2028,
      totalPopulation: 810610
    },
    {
      year: 2042,
      totalPopulation: 946389
    },
    {
      year: 2044,
      totalPopulation: 960462
    },
    {
      year: 1999,
      totalPopulation: 508809
    },
    {
      year: 2024,
      totalPopulation: 767252
    },
    {
      year: 2004,
      totalPopulation: 558449
    },
    {
      year: 2007,
      totalPopulation: 588777
    },
    {
      year: 2027,
      totalPopulation: 799709
    },
    {
      year: 2030,
      totalPopulation: 832462
    },
    {
      year: 2026,
      totalPopulation: 788855
    },
    {
      year: 2010,
      totalPopulation: 627232
    },
    {
      year: 2040,
      totalPopulation: 930816
    },
    {
      year: 1990,
      totalPopulation: 397889
    },
    {
      year: 2050,
      totalPopulation: 994140
    },
    {
      year: 2015,
      totalPopulation: 677973
    },
    {
      year: 2035,
      totalPopulation: 885400
    },
    {
      year: 2031,
      totalPopulation: 843405
    },
    {
      year: 2032,
      totalPopulation: 854300
    },
    {
      year: 1991,
      totalPopulation: 405951
    },
    {
      year: 2034,
      totalPopulation: 875321
    },
    {
      year: 1993,
      totalPopulation: 437127
    },
    {
      year: 2023,
      totalPopulation: 756951
    },
    {
      year: 2025,
      totalPopulation: 778050
    },
    {
      year: 2047,
      totalPopulation: 978863
    },
    {
      year: 1996,
      totalPopulation: 476988
    }
  ],
  Broomfield,
  "Las Animas": [
    {
      year: 2045,
      totalPopulation: 12257
    },
    {
      year: 2005,
      totalPopulation: 15570
    },
    {
      year: 1995,
      totalPopulation: 14907
    },
    {
      year: 1998,
      totalPopulation: 15050
    },
    {
      year: 2039,
      totalPopulation: 13140
    },
    {
      year: 2012,
      totalPopulation: 15248
    },
    {
      year: 2015,
      totalPopulation: 14994
    },
    {
      year: 2013,
      totalPopulation: 15168
    },
    {
      year: 2050,
      totalPopulation: 11468
    },
    {
      year: 2021,
      totalPopulation: 14443
    },
    {
      year: 2020,
      totalPopulation: 14562
    },
    {
      year: 1997,
      totalPopulation: 15048
    },
    {
      year: 2044,
      totalPopulation: 12413
    },
    {
      year: 2017,
      totalPopulation: 14813
    },
    {
      year: 2009,
      totalPopulation: 15478
    },
    {
      year: 2007,
      totalPopulation: 15525
    },
    {
      year: 2048,
      totalPopulation: 11772
    },
    {
      year: 2041,
      totalPopulation: 12860
    },
    {
      year: 2004,
      totalPopulation: 15702
    },
    {
      year: 2027,
      totalPopulation: 14224
    },
    {
      year: 2024,
      totalPopulation: 14340
    },
    {
      year: 1990,
      totalPopulation: 13765
    },
    {
      year: 2033,
      totalPopulation: 13819
    },
    {
      year: 2010,
      totalPopulation: 15407
    },
    {
      year: 2043,
      totalPopulation: 12574
    },
    {
      year: 2032,
      totalPopulation: 13914
    },
    {
      year: 2038,
      totalPopulation: 13269
    },
    {
      year: 2025,
      totalPopulation: 14310
    },
    {
      year: 2016,
      totalPopulation: 14906
    },
    {
      year: 2019,
      totalPopulation: 14642
    },
    {
      year: 2001,
      totalPopulation: 15314
    },
    {
      year: 2028,
      totalPopulation: 14182
    },
    {
      year: 2035,
      totalPopulation: 13618
    },
    {
      year: 2034,
      totalPopulation: 13723
    },
    {
      year: 2031,
      totalPopulation: 13994
    },
    {
      year: 2026,
      totalPopulation: 14262
    },
    {
      year: 1992,
      totalPopulation: 14034
    },
    {
      year: 2037,
      totalPopulation: 13396
    },
    {
      year: 2022,
      totalPopulation: 14402
    },
    {
      year: 2006,
      totalPopulation: 15554
    },
    {
      year: 2030,
      totalPopulation: 14082
    },
    {
      year: 1999,
      totalPopulation: 15138
    },
    {
      year: 2011,
      totalPopulation: 15325
    },
    {
      year: 2046,
      totalPopulation: 12097
    },
    {
      year: 2e3,
      totalPopulation: 15286
    },
    {
      year: 1996,
      totalPopulation: 14974
    },
    {
      year: 1993,
      totalPopulation: 14215
    },
    {
      year: 2036,
      totalPopulation: 13514
    },
    {
      year: 2014,
      totalPopulation: 15085
    },
    {
      year: 2008,
      totalPopulation: 15487
    },
    {
      year: 2002,
      totalPopulation: 15658
    },
    {
      year: 2018,
      totalPopulation: 14727
    },
    {
      year: 1994,
      totalPopulation: 14753
    },
    {
      year: 2049,
      totalPopulation: 11617
    },
    {
      year: 1991,
      totalPopulation: 13816
    },
    {
      year: 2029,
      totalPopulation: 14127
    },
    {
      year: 2023,
      totalPopulation: 14369
    },
    {
      year: 2042,
      totalPopulation: 12720
    },
    {
      year: 2047,
      totalPopulation: 11940
    },
    {
      year: 2040,
      totalPopulation: 13002
    },
    {
      year: 2003,
      totalPopulation: 16089
    }
  ],
  Jackson,
  Chaffee,
  Eagle,
  "Kit Carson": [
    {
      year: 2014,
      totalPopulation: 7665
    },
    {
      year: 2041,
      totalPopulation: 7200
    },
    {
      year: 2026,
      totalPopulation: 7042
    },
    {
      year: 2046,
      totalPopulation: 7261
    },
    {
      year: 2040,
      totalPopulation: 7190
    },
    {
      year: 1995,
      totalPopulation: 7413
    },
    {
      year: 2045,
      totalPopulation: 7246
    },
    {
      year: 2037,
      totalPopulation: 7159
    },
    {
      year: 2028,
      totalPopulation: 7054
    },
    {
      year: 1991,
      totalPopulation: 7156
    },
    {
      year: 2015,
      totalPopulation: 7566
    },
    {
      year: 2047,
      totalPopulation: 7276
    },
    {
      year: 2038,
      totalPopulation: 7168
    },
    {
      year: 2012,
      totalPopulation: 8084
    },
    {
      year: 1993,
      totalPopulation: 7262
    },
    {
      year: 2005,
      totalPopulation: 7998
    },
    {
      year: 2022,
      totalPopulation: 7017
    },
    {
      year: 2002,
      totalPopulation: 8287
    },
    {
      year: 2011,
      totalPopulation: 8165
    },
    {
      year: 2024,
      totalPopulation: 7021
    },
    {
      year: 2001,
      totalPopulation: 8078
    },
    {
      year: 2032,
      totalPopulation: 7097
    },
    {
      year: 1999,
      totalPopulation: 7901
    },
    {
      year: 2018,
      totalPopulation: 7280
    },
    {
      year: 2050,
      totalPopulation: 7311
    },
    {
      year: 2048,
      totalPopulation: 7283
    },
    {
      year: 2021,
      totalPopulation: 7025
    },
    {
      year: 2042,
      totalPopulation: 7206
    },
    {
      year: 2033,
      totalPopulation: 7110
    },
    {
      year: 2036,
      totalPopulation: 7150
    },
    {
      year: 2003,
      totalPopulation: 8186
    },
    {
      year: 2007,
      totalPopulation: 7835
    },
    {
      year: 2013,
      totalPopulation: 8011
    },
    {
      year: 2030,
      totalPopulation: 7075
    },
    {
      year: 2031,
      totalPopulation: 7091
    },
    {
      year: 2043,
      totalPopulation: 7223
    },
    {
      year: 2034,
      totalPopulation: 7117
    },
    {
      year: 1994,
      totalPopulation: 7340
    },
    {
      year: 1997,
      totalPopulation: 7601
    },
    {
      year: 2019,
      totalPopulation: 7183
    },
    {
      year: 2006,
      totalPopulation: 7944
    },
    {
      year: 2008,
      totalPopulation: 8042
    },
    {
      year: 2009,
      totalPopulation: 8269
    },
    {
      year: 1998,
      totalPopulation: 7756
    },
    {
      year: 2039,
      totalPopulation: 7180
    },
    {
      year: 2023,
      totalPopulation: 7025
    },
    {
      year: 2049,
      totalPopulation: 7296
    },
    {
      year: 1996,
      totalPopulation: 7479
    },
    {
      year: 2004,
      totalPopulation: 8259
    },
    {
      year: 2044,
      totalPopulation: 7236
    },
    {
      year: 2e3,
      totalPopulation: 7975
    },
    {
      year: 1992,
      totalPopulation: 7234
    },
    {
      year: 2035,
      totalPopulation: 7134
    },
    {
      year: 2010,
      totalPopulation: 8267
    },
    {
      year: 2016,
      totalPopulation: 7480
    },
    {
      year: 2027,
      totalPopulation: 7048
    },
    {
      year: 2025,
      totalPopulation: 7028
    },
    {
      year: 1990,
      totalPopulation: 7140
    },
    {
      year: 2020,
      totalPopulation: 7077
    },
    {
      year: 2017,
      totalPopulation: 7402
    },
    {
      year: 2029,
      totalPopulation: 7069
    }
  ],
  Montrose,
  Elbert,
  Washington,
  "San Miguel": [
    {
      year: 1991,
      totalPopulation: 4124
    },
    {
      year: 2043,
      totalPopulation: 11195
    },
    {
      year: 2046,
      totalPopulation: 11397
    },
    {
      year: 2017,
      totalPopulation: 8013
    },
    {
      year: 2008,
      totalPopulation: 7306
    },
    {
      year: 1994,
      totalPopulation: 5308
    },
    {
      year: 2041,
      totalPopulation: 11016
    },
    {
      year: 2035,
      totalPopulation: 10315
    },
    {
      year: 2037,
      totalPopulation: 10570
    },
    {
      year: 2031,
      totalPopulation: 9713
    },
    {
      year: 2032,
      totalPopulation: 9865
    },
    {
      year: 2034,
      totalPopulation: 10168
    },
    {
      year: 2027,
      totalPopulation: 9054
    },
    {
      year: 1998,
      totalPopulation: 6452
    },
    {
      year: 2022,
      totalPopulation: 8194
    },
    {
      year: 2002,
      totalPopulation: 7040
    },
    {
      year: 2005,
      totalPopulation: 7045
    },
    {
      year: 2007,
      totalPopulation: 7276
    },
    {
      year: 2006,
      totalPopulation: 7057
    },
    {
      year: 2039,
      totalPopulation: 10809
    },
    {
      year: 2013,
      totalPopulation: 7612
    },
    {
      year: 1992,
      totalPopulation: 4563
    },
    {
      year: 2030,
      totalPopulation: 9554
    },
    {
      year: 2033,
      totalPopulation: 10021
    },
    {
      year: 2047,
      totalPopulation: 11456
    },
    {
      year: 2014,
      totalPopulation: 7730
    },
    {
      year: 2021,
      totalPopulation: 8079
    },
    {
      year: 2010,
      totalPopulation: 7356
    },
    {
      year: 2001,
      totalPopulation: 6901
    },
    {
      year: 2004,
      totalPopulation: 7024
    },
    {
      year: 2038,
      totalPopulation: 10691
    },
    {
      year: 1997,
      totalPopulation: 5952
    },
    {
      year: 2003,
      totalPopulation: 7013
    },
    {
      year: 2011,
      totalPopulation: 7486
    },
    {
      year: 2044,
      totalPopulation: 11273
    },
    {
      year: 1999,
      totalPopulation: 6531
    },
    {
      year: 2049,
      totalPopulation: 11546
    },
    {
      year: 2029,
      totalPopulation: 9384
    },
    {
      year: 2026,
      totalPopulation: 8887
    },
    {
      year: 2018,
      totalPopulation: 8154
    },
    {
      year: 2025,
      totalPopulation: 8718
    },
    {
      year: 2019,
      totalPopulation: 8126
    },
    {
      year: 2050,
      totalPopulation: 11579
    },
    {
      year: 1990,
      totalPopulation: 3723
    },
    {
      year: 2024,
      totalPopulation: 8539
    },
    {
      year: 2e3,
      totalPopulation: 6614
    },
    {
      year: 2028,
      totalPopulation: 9220
    },
    {
      year: 2016,
      totalPopulation: 8004
    },
    {
      year: 2009,
      totalPopulation: 7271
    },
    {
      year: 2023,
      totalPopulation: 8366
    },
    {
      year: 2015,
      totalPopulation: 7823
    },
    {
      year: 1993,
      totalPopulation: 4869
    },
    {
      year: 2045,
      totalPopulation: 11338
    },
    {
      year: 1995,
      totalPopulation: 5489
    },
    {
      year: 2040,
      totalPopulation: 10914
    },
    {
      year: 2036,
      totalPopulation: 10444
    },
    {
      year: 1996,
      totalPopulation: 5798
    },
    {
      year: 2048,
      totalPopulation: 11504
    },
    {
      year: 2020,
      totalPopulation: 8063
    },
    {
      year: 2012,
      totalPopulation: 7573
    },
    {
      year: 2042,
      totalPopulation: 11109
    }
  ],
  Pueblo,
  Gunnison,
  Saguache,
  Ouray,
  Custer,
  Cheyenne,
  "Rio Blanco": [
    {
      year: 2020,
      totalPopulation: 6534
    },
    {
      year: 2015,
      totalPopulation: 6620
    },
    {
      year: 2013,
      totalPopulation: 6762
    },
    {
      year: 1991,
      totalPopulation: 6024
    },
    {
      year: 2005,
      totalPopulation: 5820
    },
    {
      year: 2042,
      totalPopulation: 5943
    },
    {
      year: 1999,
      totalPopulation: 6093
    },
    {
      year: 2018,
      totalPopulation: 6588
    },
    {
      year: 2002,
      totalPopulation: 5936
    },
    {
      year: 2003,
      totalPopulation: 5854
    },
    {
      year: 2e3,
      totalPopulation: 5967
    },
    {
      year: 2016,
      totalPopulation: 6620
    },
    {
      year: 2023,
      totalPopulation: 6507
    },
    {
      year: 2044,
      totalPopulation: 5864
    },
    {
      year: 1993,
      totalPopulation: 6261
    },
    {
      year: 2019,
      totalPopulation: 6532
    },
    {
      year: 1998,
      totalPopulation: 6230
    },
    {
      year: 2007,
      totalPopulation: 6090
    },
    {
      year: 2033,
      totalPopulation: 6270
    },
    {
      year: 2011,
      totalPopulation: 6738
    },
    {
      year: 2036,
      totalPopulation: 6167
    },
    {
      year: 2008,
      totalPopulation: 6161
    },
    {
      year: 2006,
      totalPopulation: 5978
    },
    {
      year: 2004,
      totalPopulation: 5903
    },
    {
      year: 1994,
      totalPopulation: 6318
    },
    {
      year: 2001,
      totalPopulation: 5880
    },
    {
      year: 1995,
      totalPopulation: 6400
    },
    {
      year: 2026,
      totalPopulation: 6457
    },
    {
      year: 2021,
      totalPopulation: 6538
    },
    {
      year: 2030,
      totalPopulation: 6377
    },
    {
      year: 2029,
      totalPopulation: 6396
    },
    {
      year: 2028,
      totalPopulation: 6422
    },
    {
      year: 1990,
      totalPopulation: 6063
    },
    {
      year: 1996,
      totalPopulation: 6342
    },
    {
      year: 2014,
      totalPopulation: 6652
    },
    {
      year: 2045,
      totalPopulation: 5827
    },
    {
      year: 2022,
      totalPopulation: 6522
    },
    {
      year: 2039,
      totalPopulation: 6058
    },
    {
      year: 2024,
      totalPopulation: 6492
    },
    {
      year: 2035,
      totalPopulation: 6196
    },
    {
      year: 2012,
      totalPopulation: 6793
    },
    {
      year: 2027,
      totalPopulation: 6440
    },
    {
      year: 2038,
      totalPopulation: 6089
    },
    {
      year: 2037,
      totalPopulation: 6135
    },
    {
      year: 2043,
      totalPopulation: 5902
    },
    {
      year: 2041,
      totalPopulation: 5979
    },
    {
      year: 2050,
      totalPopulation: 5610
    },
    {
      year: 1992,
      totalPopulation: 6177
    },
    {
      year: 2017,
      totalPopulation: 6567
    },
    {
      year: 2040,
      totalPopulation: 6018
    },
    {
      year: 2009,
      totalPopulation: 6316
    },
    {
      year: 2048,
      totalPopulation: 5698
    },
    {
      year: 2049,
      totalPopulation: 5654
    },
    {
      year: 2034,
      totalPopulation: 6234
    },
    {
      year: 2010,
      totalPopulation: 6617
    },
    {
      year: 2046,
      totalPopulation: 5786
    },
    {
      year: 1997,
      totalPopulation: 6320
    },
    {
      year: 2031,
      totalPopulation: 6340
    },
    {
      year: 2047,
      totalPopulation: 5735
    },
    {
      year: 2025,
      totalPopulation: 6482
    },
    {
      year: 2032,
      totalPopulation: 6298
    }
  ],
  Kiowa,
  Delta,
  Crowley,
  Fremont,
  Garfield,
  Routt,
  Denver,
  Morgan,
  Alamosa,
  Douglas,
  Mineral,
  "Rio Grande": [
    {
      year: 2030,
      totalPopulation: 11459
    },
    {
      year: 2020,
      totalPopulation: 11557
    },
    {
      year: 2046,
      totalPopulation: 10509
    },
    {
      year: 2023,
      totalPopulation: 11501
    },
    {
      year: 2016,
      totalPopulation: 11731
    },
    {
      year: 2022,
      totalPopulation: 11500
    },
    {
      year: 1990,
      totalPopulation: 10770
    },
    {
      year: 2031,
      totalPopulation: 11439
    },
    {
      year: 2012,
      totalPopulation: 11914
    },
    {
      year: 2017,
      totalPopulation: 11689
    },
    {
      year: 2005,
      totalPopulation: 12695
    },
    {
      year: 2036,
      totalPopulation: 11255
    },
    {
      year: 2003,
      totalPopulation: 12622
    },
    {
      year: 2025,
      totalPopulation: 11540
    },
    {
      year: 2048,
      totalPopulation: 10300
    },
    {
      year: 1997,
      totalPopulation: 11968
    },
    {
      year: 2029,
      totalPopulation: 11487
    },
    {
      year: 2038,
      totalPopulation: 11146
    },
    {
      year: 1994,
      totalPopulation: 11466
    },
    {
      year: 2040,
      totalPopulation: 11015
    },
    {
      year: 1998,
      totalPopulation: 12117
    },
    {
      year: 2006,
      totalPopulation: 12432
    },
    {
      year: 2014,
      totalPopulation: 11823
    },
    {
      year: 2041,
      totalPopulation: 10954
    },
    {
      year: 2008,
      totalPopulation: 12106
    },
    {
      year: 1999,
      totalPopulation: 12288
    },
    {
      year: 2010,
      totalPopulation: 12001
    },
    {
      year: 2e3,
      totalPopulation: 12429
    },
    {
      year: 2009,
      totalPopulation: 11996
    },
    {
      year: 2033,
      totalPopulation: 11374
    },
    {
      year: 1993,
      totalPopulation: 11210
    },
    {
      year: 2034,
      totalPopulation: 11341
    },
    {
      year: 2037,
      totalPopulation: 11202
    },
    {
      year: 2018,
      totalPopulation: 11647
    },
    {
      year: 2049,
      totalPopulation: 10183
    },
    {
      year: 2027,
      totalPopulation: 11540
    },
    {
      year: 2007,
      totalPopulation: 12166
    },
    {
      year: 2045,
      totalPopulation: 10602
    },
    {
      year: 1992,
      totalPopulation: 10944
    },
    {
      year: 2019,
      totalPopulation: 11600
    },
    {
      year: 2002,
      totalPopulation: 12407
    },
    {
      year: 2042,
      totalPopulation: 10871
    },
    {
      year: 2021,
      totalPopulation: 11511
    },
    {
      year: 2050,
      totalPopulation: 10069
    },
    {
      year: 2001,
      totalPopulation: 12404
    },
    {
      year: 1996,
      totalPopulation: 11822
    },
    {
      year: 2013,
      totalPopulation: 11866
    },
    {
      year: 1991,
      totalPopulation: 10842
    },
    {
      year: 2004,
      totalPopulation: 12830
    },
    {
      year: 2035,
      totalPopulation: 11296
    },
    {
      year: 2028,
      totalPopulation: 11512
    },
    {
      year: 2026,
      totalPopulation: 11560
    },
    {
      year: 2044,
      totalPopulation: 10704
    },
    {
      year: 2011,
      totalPopulation: 11954
    },
    {
      year: 2015,
      totalPopulation: 11778
    },
    {
      year: 2043,
      totalPopulation: 10783
    },
    {
      year: 2047,
      totalPopulation: 10403
    },
    {
      year: 1995,
      totalPopulation: 11695
    },
    {
      year: 2039,
      totalPopulation: 11090
    },
    {
      year: 2032,
      totalPopulation: 11406
    },
    {
      year: 2024,
      totalPopulation: 11506
    }
  ],
  Hinsdale,
  Lake,
  Baca,
  Montezuma,
  Conejos,
  "Clear Creek": [
    {
      year: 2016,
      totalPopulation: 9238
    },
    {
      year: 2010,
      totalPopulation: 9155
    },
    {
      year: 2041,
      totalPopulation: 10986
    },
    {
      year: 2035,
      totalPopulation: 10521
    },
    {
      year: 1994,
      totalPopulation: 8460
    },
    {
      year: 2050,
      totalPopulation: 11329
    },
    {
      year: 2008,
      totalPopulation: 9294
    },
    {
      year: 2011,
      totalPopulation: 9028
    },
    {
      year: 2004,
      totalPopulation: 9459
    },
    {
      year: 2046,
      totalPopulation: 11234
    },
    {
      year: 2028,
      totalPopulation: 9807
    },
    {
      year: 1996,
      totalPopulation: 8722
    },
    {
      year: 2044,
      totalPopulation: 11153
    },
    {
      year: 1998,
      totalPopulation: 9005
    },
    {
      year: 2029,
      totalPopulation: 9910
    },
    {
      year: 1997,
      totalPopulation: 8880
    },
    {
      year: 2018,
      totalPopulation: 9390
    },
    {
      year: 2042,
      totalPopulation: 11055
    },
    {
      year: 2048,
      totalPopulation: 11291
    },
    {
      year: 2001,
      totalPopulation: 9468
    },
    {
      year: 2027,
      totalPopulation: 9701
    },
    {
      year: 2e3,
      totalPopulation: 9360
    },
    {
      year: 2025,
      totalPopulation: 9530
    },
    {
      year: 2047,
      totalPopulation: 11270
    },
    {
      year: 2043,
      totalPopulation: 11101
    },
    {
      year: 2024,
      totalPopulation: 9484
    },
    {
      year: 2049,
      totalPopulation: 11320
    },
    {
      year: 2021,
      totalPopulation: 9378
    },
    {
      year: 2014,
      totalPopulation: 9035
    },
    {
      year: 2038,
      totalPopulation: 10776
    },
    {
      year: 2015,
      totalPopulation: 9160
    },
    {
      year: 2031,
      totalPopulation: 10127
    },
    {
      year: 1990,
      totalPopulation: 7619
    },
    {
      year: 2034,
      totalPopulation: 10428
    },
    {
      year: 2045,
      totalPopulation: 11192
    },
    {
      year: 1995,
      totalPopulation: 8686
    },
    {
      year: 2003,
      totalPopulation: 9514
    },
    {
      year: 2030,
      totalPopulation: 10020
    },
    {
      year: 2002,
      totalPopulation: 9462
    },
    {
      year: 2019,
      totalPopulation: 9415
    },
    {
      year: 2040,
      totalPopulation: 10924
    },
    {
      year: 2023,
      totalPopulation: 9449
    },
    {
      year: 1999,
      totalPopulation: 9186
    },
    {
      year: 2039,
      totalPopulation: 10852
    },
    {
      year: 2009,
      totalPopulation: 9064
    },
    {
      year: 2017,
      totalPopulation: 9418
    },
    {
      year: 1992,
      totalPopulation: 7834
    },
    {
      year: 2037,
      totalPopulation: 10696
    },
    {
      year: 2013,
      totalPopulation: 8965
    },
    {
      year: 1993,
      totalPopulation: 8039
    },
    {
      year: 2006,
      totalPopulation: 9278
    },
    {
      year: 2033,
      totalPopulation: 10329
    },
    {
      year: 2020,
      totalPopulation: 9392
    },
    {
      year: 2005,
      totalPopulation: 9391
    },
    {
      year: 2012,
      totalPopulation: 9016
    },
    {
      year: 2022,
      totalPopulation: 9405
    },
    {
      year: 2032,
      totalPopulation: 10234
    },
    {
      year: 2026,
      totalPopulation: 9608
    },
    {
      year: 2036,
      totalPopulation: 10613
    },
    {
      year: 1991,
      totalPopulation: 7663
    },
    {
      year: 2007,
      totalPopulation: 9334
    }
  ],
  Sedgwick,
  Arapahoe,
  Larimer,
  Huerfano,
  Otero,
  Archuleta,
  Phillips,
  Yuma,
  Moffat,
  Prowers,
  Park,
  Mesa,
  Grand,
  Boulder,
  Jefferson,
  Lincoln,
  Bent,
  Dolores,
  Adams,
  Gilpin,
  Logan,
  "La Plata": [
    {
      year: 2011,
      totalPopulation: 51805
    },
    {
      year: 2020,
      totalPopulation: 55649
    },
    {
      year: 2015,
      totalPopulation: 54302
    },
    {
      year: 2016,
      totalPopulation: 54879
    },
    {
      year: 1996,
      totalPopulation: 39700
    },
    {
      year: 2049,
      totalPopulation: 79183
    },
    {
      year: 2050,
      totalPopulation: 79820
    },
    {
      year: 2030,
      totalPopulation: 65091
    },
    {
      year: 2023,
      totalPopulation: 57830
    },
    {
      year: 1990,
      totalPopulation: 32466
    },
    {
      year: 2048,
      totalPopulation: 78548
    },
    {
      year: 1992,
      totalPopulation: 34430
    },
    {
      year: 2034,
      totalPopulation: 68417
    },
    {
      year: 2012,
      totalPopulation: 52316
    },
    {
      year: 2033,
      totalPopulation: 67617
    },
    {
      year: 2005,
      totalPopulation: 47710
    },
    {
      year: 2028,
      totalPopulation: 63349
    },
    {
      year: 2039,
      totalPopulation: 72305
    },
    {
      year: 2031,
      totalPopulation: 65946
    },
    {
      year: 1998,
      totalPopulation: 41170
    },
    {
      year: 2019,
      totalPopulation: 55511
    },
    {
      year: 2017,
      totalPopulation: 55034
    },
    {
      year: 2035,
      totalPopulation: 69218
    },
    {
      year: 2032,
      totalPopulation: 66800
    },
    {
      year: 1999,
      totalPopulation: 42757
    },
    {
      year: 2045,
      totalPopulation: 76573
    },
    {
      year: 2013,
      totalPopulation: 53140
    },
    {
      year: 2008,
      totalPopulation: 50074
    },
    {
      year: 2024,
      totalPopulation: 58935
    },
    {
      year: 2043,
      totalPopulation: 75193
    },
    {
      year: 2037,
      totalPopulation: 70786
    },
    {
      year: 2021,
      totalPopulation: 55795
    },
    {
      year: 2025,
      totalPopulation: 60049
    },
    {
      year: 2002,
      totalPopulation: 46087
    },
    {
      year: 2009,
      totalPopulation: 50760
    },
    {
      year: 2001,
      totalPopulation: 45648
    },
    {
      year: 2038,
      totalPopulation: 71548
    },
    {
      year: 2026,
      totalPopulation: 61265
    },
    {
      year: 2006,
      totalPopulation: 48408
    },
    {
      year: 1995,
      totalPopulation: 38760
    },
    {
      year: 1991,
      totalPopulation: 33411
    },
    {
      year: 2040,
      totalPopulation: 73044
    },
    {
      year: 2044,
      totalPopulation: 75886
    },
    {
      year: 2022,
      totalPopulation: 56705
    },
    {
      year: 2e3,
      totalPopulation: 44578
    },
    {
      year: 2041,
      totalPopulation: 73771
    },
    {
      year: 2027,
      totalPopulation: 62367
    },
    {
      year: 2007,
      totalPopulation: 49151
    },
    {
      year: 1993,
      totalPopulation: 35595
    },
    {
      year: 1994,
      totalPopulation: 36904
    },
    {
      year: 2047,
      totalPopulation: 77896
    },
    {
      year: 2029,
      totalPopulation: 64224
    },
    {
      year: 2018,
      totalPopulation: 55733
    },
    {
      year: 2014,
      totalPopulation: 53560
    },
    {
      year: 1997,
      totalPopulation: 40319
    },
    {
      year: 2010,
      totalPopulation: 51441
    },
    {
      year: 2003,
      totalPopulation: 46449
    },
    {
      year: 2036,
      totalPopulation: 70010
    },
    {
      year: 2042,
      totalPopulation: 74484
    },
    {
      year: 2004,
      totalPopulation: 46927
    },
    {
      year: 2046,
      totalPopulation: 77242
    }
  ],
  Summit
};
const LineChart = ({ data: data2, dimensions, svgRef, min, max }) => {
  const { width, height } = dimensions;
  const parseDate = d3.timeParse("%Y");
  const xScale = d3.scaleTime().domain(d3.extent(data2[0].data, (d) => parseDate(d.date))).range([0, width]);
  const yScale = d3.scaleLinear().domain([
    min < 0 ? min * 1.25 : min * 0.75,
    max < 0 ? max * 0.75 : max * 1.1
  ]).range([height - 50, 0]);
  const svgEl = d3.select(svgRef.current);
  svgEl.selectAll("*").remove();
  const svg = svgEl.append("g").attr("transform", `translate(100,20)`);
  const xAxis = d3.axisBottom(xScale).tickSize(-height).tickFormat(d3.timeFormat("%Y"));
  const xAxisGroup = svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);
  xAxisGroup.select(".domain").remove();
  xAxisGroup.selectAll("line").attr("stroke", "var(--alt-color)");
  xAxisGroup.selectAll("text").attr("transform", "rotate(-45)").attr("color", "var(--text-color)").attr("font-size", "0.75rem");
  const yAxis = d3.axisLeft(yScale).tickSize(-width).tickFormat((val) => val);
  const yAxisGroup = svg.append("g").call(yAxis);
  yAxisGroup.select(".domain").remove();
  yAxisGroup.selectAll("line").attr("stroke", "var(--alt-color)");
  yAxisGroup.selectAll("text").attr("color", "var(--text-color)").attr("font-size", "0.75rem");
  const DrawLine = (lineData, key) => {
    const line = d3.line().x((d) => xScale(parseDate(d.date))).y((d) => yScale(d.value));
    svg.append("path").attr("d", line(lineData)).attr("stroke", `var(--line-color-${key % 10})`).attr("stroke-width", 2).attr("fill", "none").attr("class", "line");
  };
  for (const dataLine in data2) {
    DrawLine(data2[dataLine].data, dataLine);
  }
};
const ChartBox = ({
  data: data2
}) => {
  const svgRef = React.useRef(null);
  const [width, setWidth] = useState(1500);
  const [height, setHeight] = useState(750);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth * 0.75);
      setHeight(window.innerHeight * 0.75);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const dimensions = {
    width,
    height
  };
  useEffect(() => {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for (const county of data2) {
      const testMin = d3.min(county.data, (d) => d.value) || Number.MAX_SAFE_INTEGER;
      const testMax = d3.max(county.data, (d) => d.value) || max;
      if (testMin < min) {
        min = testMin;
      }
      if (testMax > max) {
        max = testMax;
      }
    }
    LineChart({
      data: data2,
      dimensions,
      svgRef,
      min,
      max
    });
  }, [data2, dimensions, svgRef]);
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Colorado Population & Projected Growth"
    }), /* @__PURE__ */ jsx("svg", {
      className: "Chart",
      ref: svgRef,
      width: width + 120,
      height: height * 1.1
    })]
  });
};
const App$1 = "";
function App() {
  const [county, setCounty] = useState(["Denver", "El Paso"]);
  const countyList = Object.keys(data).map((entry) => {
    return /* @__PURE__ */ jsx("li", {
      children: /* @__PURE__ */ jsx("button", {
        className: `SelectionButton ${county.includes(entry) ? "Active" : ""}`,
        onClick: () => {
          if (county.includes(entry)) {
            if (county.length > 1) {
              setCounty(county.filter((c) => c !== entry));
            }
            return;
          }
          setCounty([...county, entry]);
        },
        children: entry
      })
    }, entry);
  });
  const dataSets = [];
  county.forEach((entry) => {
    const newData = [];
    for (const dataPoint of data[entry]) {
      newData.push({
        date: dataPoint.year,
        value: dataPoint.totalPopulation
      });
    }
    newData.sort((a, b) => a.date - b.date);
    dataSets.push({
      data: newData,
      name: entry
    });
  });
  return /* @__PURE__ */ jsxs("div", {
    className: "App",
    children: [/* @__PURE__ */ jsx("div", {
      className: "SidePanel",
      children: /* @__PURE__ */ jsx("ul", {
        className: "SelectionList",
        children: countyList
      })
    }), /* @__PURE__ */ jsx(ChartBox, {
      data: dataSets
    })]
  });
}
function Page() {
  return /* @__PURE__ */ jsx(App, {});
}
export {
  Page
};
