fn main() {
    println!("f->c: {}", fahrenheit_2_celsius(120.0));
    println!("c->f: {}", celsius_2_fahrenheit(48.89));
    println!("fibonacci: {}", fibonacci(30));
}

fn fahrenheit_2_celsius(f: f64) -> f64 {
    (f-32.0) * 5.0/9.0
}

fn celsius_2_fahrenheit(c: f64) -> f64 {
    c * 9.0/5.0 + 32.0
}

fn fibonacci(i: u32) -> u32 {
    if i == 0 {
        return i;
    } else if i == 1 {
        return i;
    } else {
        return fibonacci(i-1) + fibonacci(i-2);
    }
}