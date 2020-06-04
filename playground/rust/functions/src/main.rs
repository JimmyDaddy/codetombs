fn main() {
    println!("Hello, world!");

    println!("{0}", another_function(22));

    let a = [10, 20, 30, 40, 50];
    for element in a.iter() {
        println!("the value is: {}", element);
    }

    for number in (1..8).rev() {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");
}

fn another_function(x: i32) -> i32 {

    let y = {
        // let x = 3; // return will be 4
        x + 1
    };
    println!("Another function. {0}", x);
    if x < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }

    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {}", result);

    y
    // or
    // return y;
}