
interface IMap<TVal>{
    [key: string]: TVal
};

interface IClassName {
    className: string
};

const salarySum = (sal: IMap<number>) => {
    let sum: number = Object.values(sal).reduce((t,c) => t + c, 0);
    return sum;
}

const maxSalary = (sal: IMap<number>, def: string) : string => {
    let value = Object.entries(sal).sort((s1, s2) => s2[1] - s1[1])[0];
    return value && value.length ? value[0] : def;
};

const isNumeric = (n: any) => !isNaN(parseFloat(n)) && isFinite(n);

const multiplyNumeric = (obj: any) => {
    Object.keys(obj).forEach(key => {
        if(isNumeric(obj[key])){
            obj[key] *= 2;
        }
    });
    return obj;
};

const countBy = (step: number, num: number) => {
    const result = [];
    for(let i = step; i <= step * num; i += step){
        result.push(i);
    }
    return result;
};

const addClass = (obj: IClassName, cls: string) => {
    if(obj.className.split(" ").indexOf(cls) < 0){
        obj.className = `${obj.className} ${cls}`;
    }
    return obj;
}

export {
    IMap,
    IClassName,
    salarySum,
    maxSalary,
    countBy,
    multiplyNumeric,
    addClass,
};