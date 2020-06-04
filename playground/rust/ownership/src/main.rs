fn main() {
    let s = "ssss";
    let ns = String::from("sssss");
    let mut mus = "aaa";
    drop(mus);
    mus = "ssssssß";
    mus.contains("s");
    // ns.push_str("ssss");
    println!("Hello, world! {0},{1},{2}, {3}", s, ns, mus, mus.contains("s"));

    let x = 1;
    let y = x;
    println!("{0} {1}", x, y);

    let h = String::from("hello");
    let w = h;
    // println!("{0} {1}", h, w); //
    //                     ^ value borrowed here after move
    println!("{0}", w);

    let x = w.clone();

    println!("{}", x);

    let h = String::from("hello");
    let w = h;
    // println!("{0} {1}", h, w); //
    //                     ^ value borrowed here after move
    println!("{0}", w);
    let mut x = w.clone();

    println!("{}", x);
    x.push_str("sš");
    println!("x: {}, w: {1}", x, w);

    take_ownership(x);
    // println!("x: {}", x);
    //                   ^ value borrowed here after move

    let s = takes_and_gives_back(w);
    // println!("w: {}", w);
    //                   ^ value borrowed here after move
    println!("s: {}", s);

    let (s, len) = calculate_length(s);
    println!("s1: {}, length: {1}", s, len);

    println!("length: {}, s: {1}", calculate_length_ref(&s), s);

    let refs = &s;
    println!("{}", refs);
    println!("length: {}, s: {1}", calculate_length_ref(refs), refs);
    println!("{}", refs);
    /*  ==========References and Borrowing=========== */
    let mut h = String::from("hello world!");
    let refs = &mut h;
    change(refs);
    // println!("{0}, {1}", refs, h); //
    //                            ^ immutable borrow occurs here
    //             ^ mutable borrow later used here 
    println!("{0}", refs);
    // refs is no longer used after println
    println!("{0}", h);
    // println!("{0}", refs); // is you put this line of code , the code below will not valid because of immutable borrow
    /*
    We also cannot have a mutable reference while we have an immutable one. 
    Users of an immutable reference don’t expect the values to suddenly change out from under them! 
    However, multiple immutable references are okay because no one who is just reading the data has the ability to affect anyone else’s reading of the data.
    */

    /*  ==========Dangling References=========== */
    // se function dangle

    /*  ==========The Slice Type=========== */
    let mut s = String::from("hello world");
    let word = first_word(&s);
    println!("{}", word);
    s.clear();
}

fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[..i];
        }
    }

    s
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() returns the length of a String

    (s, length)
}


fn take_ownership(x: String) {
    println!("{}", x);
}

// takes_and_gives_back will take a String and return one
fn takes_and_gives_back(a_string: String) -> String { // a_string comes into scope
    // a_string is returned and moves out to the calling function
    a_string
}

fn calculate_length_ref(s: &String) -> usize {
    println!("s: {}", s);
    s.len()
}

fn change(s: &mut String) {
    s.push_str("www");
}

// fn dangle() -> &String {
//     let s = String::from("hello");

//     &s
// }
// // s goes out of scope, and is dropped. Its memory goes away.
// // Danger!