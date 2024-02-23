class PisanoCalculator {
    constructor(seed1 = BigInt(0), seed2 = BigInt(1), modulo = BigInt(1)) {
        this.seed1 = BigInt(seed1);
        this.seed2 = BigInt(seed2);
        this.modulo = BigInt(modulo);
        }
    
    nextFibNumber(seed1, seed2) {
        return seed1 + seed2;
    }

    periodIsEquivalent(period1, period2) {
        let isEquivalent = true;
        if (period1.length !== period2.length) {
            isEquivalent = false;
            return isEquivalent;
        }
        for (let i = 0; i < period1.length; i++) {
            if (period1[i] !== period2[i]) {
                isEquivalent = false;
                break;
            }
        }
        return isEquivalent;
    }

    generatePisanoPeriod(seed1, seed2, modulo) {
        let isDone = false;
        let isEquivalent = false;
        let period = [];
        let infiniteLoopCounter = 0;
        period.push(seed1 % modulo);
        if (modulo === BigInt(1)) {
            return period;
        }
        period.push(seed2 % modulo);
        while(!isDone) {
            infiniteLoopCounter++;
            let nextFib = this.nextFibNumber(seed1, seed2);
            period.push(nextFib % modulo);
            seed1 = seed2;
            seed2 = nextFib;
            isEquivalent = this.periodIsEquivalent(period.slice(0, period.length / 2), period.slice(period.length / 2, period.length));
            if (period.length % 2 == 0 && isEquivalent){
                period = period.slice(0, period.length / 2);
                isDone = true;
            }
            if (infiniteLoopCounter > 50000) {
                console.log('Infinite loop detected!');
                period = [];
                isDone = true;
            }
        }
        return period;
    }

    generateHatSequence(period) {
        let hatSequence = [];
        let eight= BigInt(8);
        for (let i = 0; i < period.length; i++) {
            hatSequence.push(period[i] % eight);
        }
        return hatSequence;
    }
}

export default PisanoCalculator;