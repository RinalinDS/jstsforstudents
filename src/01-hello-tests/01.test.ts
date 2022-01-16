import {sum} from "./01";

test("sum should be like this",() => {
    const a = 4;
    const b = 6;
    const c = 7;

    const result = sum(a ,b);

    expect(result).toBe(10);

})