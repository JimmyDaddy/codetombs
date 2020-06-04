fn main() {
    /* 
    A scalar type represents a single value. 
    Rust has four primary scalar types: integers, floating-point numbers, Booleans, and characters.
    */
    let x = 5;
    println!("The value of x is: {}", x);
    // x = 6;
    let x = "sss";
    println!("The value of x is: {}", x);
    let mut mx = 8;
    println!("The value of mx is: {}", mx);
    mx = 9;
    println!("The value of mx is: {}", mx);

    // integer
    /*
    Length	Signed	Unsigned
    8-bit	i8	    u8
    16-bit	i16	    u16
    32-bit	i32	    u32
    64-bit	i64	    u64
    128-bit	i128	u128
    arch	isize	usize
    */
    /*
    Each signed variant can store numbers from -(2^n - 1) to 2^n - 1 - 1 inclusive, where n is the number of bits that variant uses. 
    So an i8 can store numbers from -(2^7) to 2^7 - 1, which equals -128 to 127. 
    Unsigned variants can store numbers from 0 to 2^n - 1, so a u8 can store numbers from 0 to 2^8 - 1, which equals 0 to 255.

    */
    // Integer Overflow
    // let i:i8 = 266;
    // outpput is 9
    // println!("The value of i8 is: {}", i);

    // float
    /*
    Rust also has two primitive types for floating-point numbers, which are numbers with decimal points. 
    Rust’s floating-point types are f32 and f64, which are 32 bits and 64 bits in size, respectively. 
    The default type is f64 because on modern CPUs it’s roughly the same speed as f32 but is capable of more precision.
    */
    let x = 2.0; // f64

    let y: f32 = 3.0; // f32

    println!("The value of x is: {0}, y is: {1}", x, y);

    // boolean
    let t = true;

    let f: bool = false; // with explicit type annotation

    println!("The value of t is: {0}, f is: {1}", t, f);

    // charactor

    let c = 'z';
    let z = 'ℤ';
    let heart_eyed_cat = '😻';

    println!("{0}{1}{2}", c, z, heart_eyed_cat);

    // The Tuple Type
    /*
    A tuple is a general way of grouping together a number of values with a variety of types into one compound type. 
    Tuples have a fixed length: once declared, they cannot grow or shrink in size.

    */

    let tup: (i32, f64, u8) = (500, 6.4, 1);
    println!("{0}", tup.0);
    let mut mut_tup = (500, 6.4, 1);
    println!("{0}", mut_tup.0);
    mut_tup.0 = 12;
    println!("{0}", mut_tup.0);
    // mut_tup.1 = "sss";
    // println!("{0}", mut_tup.1);  mut_tup.1 = "sss";
    //                ^^^^^ expected floating-point number, found reference
    let (x, y, z) = mut_tup;
    println!("x:{0}, y:{1}, z:{2}", x, y, z);

    // Array
    let a = [1, 2, 3, 4, 5];
    let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
    println!("{0}, {1}", a[0], months[1]);
}
