let person = {
    name: 'Mark',
    age: 10,
}

let car: Object = {
    brand: 'BMW',
    color: "Black"
}
// completely different shape but not complaining since two are objects
car = [];
car = () => { };

// type assigning
let newCar: {
    brand: string;
    color: string;
} = {
    brand: 'BMW',
    color: "Black"
}

// newCar = []; // not work anymore

/////////////////////////
// Type Alias
type Post = {
    title: string;
    content: string;
    date: Date;
}

let post: Post = {
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
};

let post2: Post = {
    title: "This is a blog post 2",
    content: "Content of the post 2",
    date: new Date(),
};

/////////////////////////
// Nested Object
type School = {
    name: string,
    gpa: number,
    email: string,
}

type Human = {
    name: string;
    age: number;
    birth: Date;

    // nested
    school: School;

    // Index
    award: {
        [key: string]: {
            name: string,
            date: Date,
        }
    };
}

let person1: Human = {
    name: "Mark",
    age: 20,
    birth: new Date(),
    // nested
    school: {
        name: "SFU",
        gpa: 3.5,
        email: "mark22@sfu.ca"
    },
    award: {
        web: {
            name: "Web Awards",
            date: new Date(),
        },
        web2: {
            name: "Web2 Awards",
            date: new Date(),
        },
    }
}

/////////////////////////
// Index Signatures with Objects
let person2: Human = {
    name: "Mark",
    age: 20,
    birth: new Date(),
    // nested
    school: {
        name: "SFU",
        gpa: 3.5,
        email: "mark22@sfu.ca"
    },
    award: {
        cyber: {
            name: "Cyber Award",
            date: new Date(),
        }
    }
}

/////////////////////////
// Optional Object
type Post2 = {
    name: string,
    age: number,
    category?: string, // ? <- optional
    readonly typeR: "Human" | "AI", // Read only
}

let post1_optional = {
    name: "33",
    age: 10,
    category: "optional!!",
    typeR: "Human"
}

let post2_optional = {
    name: "33",
    age: 10,
    typeR: "AI",
    // no category
}

/////////////////////////
// Union Object
type Dog = {
    name: string;
    barks: boolean;
    wags: boolean;
};

type Cat = {
    name: string;
    purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
    name: "buddy",
    barks: true,
    wags: true,
}

let cat: DogAndCatUnion = {
    name: 'bella',
    purrs: false,
};

// can contain.. as long as it has all the properties of one of the type
let hybridAnimal: DogAndCatUnion = {
    name: 'bella',
    purrs: false,
    barks: true,
}

/////////////////////////
// Discriminating Unions
type NetworkLoadingState = {
    state: "loading";
}

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string,
        duration: number;
        summary: string;
    };
}

type NetworkFailedState = {
    state: "failed";
    code: number;
}

type NetworkState =
    | NetworkLoadingState
    | NetworkSuccessState
    | NetworkFailedState

function logger(state: NetworkState) {
    switch (state.state) {
        case 'loading':
            return "loading..."
        case 'success':
            return "success!!"
        case 'failed':
            return `Error: ${state.code}`
        default:
            break;
    }
}

/////////////////////////
// Intersections type
type Dog2 = {
    name: string;
    barks: boolean;
    color: string;
};

type Cat2 = {
    name: string;
    purrs: boolean;
    color: string;
};

type HybridA = Dog2 & Cat2; // intersection (ONLY COMMON PROPRERTIES)

let h1: HybridA = {
    name: "helo",
    color: "black",
    barks: true,
    purrs: false,
}