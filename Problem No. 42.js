class Solution {
    totalFine(n, date, car, fine) {
        let Totalfine = 0;
        if (date % 2 == 0) {
            for (let i = 0; i < car.length; i++) {
                if (car[i] % 2 != 0) {
                    Totalfine += fine[i];
                }
            }
        }
        else {
            for (let i = 0; i < car.length; i++) {
                if (car[i] % 2 == 0) {
                    Totalfine += fine[i];
                }
            }
        }
        console.log(Totalfine);
        return Totalfine;
    }
}

const st = new Solution();
st.totalFine(4, 1654, [22, 44, 23, 564, 55], [343, 23, 56, 12, 43]);