use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    println!("Guess the number");
    println!("Input a number");
    let secret_number = rand::thread_rng().gen_range(1, 101);
    loop {
        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");
        let guess:u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("You should input a valid number!");
                continue;
            },
        };
    
        match guess.cmp(&secret_number) {
                Ordering::Less => println!("You guessed: {0}, Too small!", guess),
                Ordering::Greater => println!("You guessed: {0}, Too big!", guess),
                Ordering::Equal => {
                    println!("You win!");
                    println!("You guessed: {0}, the secret number is {1}", guess, secret_number);
                    break;
                }
        } 
    }
}
