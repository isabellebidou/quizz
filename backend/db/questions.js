const loki = require('lokijs');
const db = new loki('db.json');
db.addCollection('questions').insert([
    {
        "id": 1, 
        "question":"Once I ____ one million dollars I will take my time and work on a strategy:" , 
        "answers": [
        {"id": "q1a1", "answer": 'receive',  "result" :  "correct"}, 
        {"id": "q1a2", "answer": 'recive', "result" :  "wrong"}, 
        {"id": "q1a3", "answer": 'received', "result" :  "wrong"},
        {"id": "q1a4", "answer": 'will receive', "result" :  "wrong"} 
        ]
    },
    {
        "id": 2, 
        "question": "I will first buy a house in the city ____ having to pay rent ever again" , 
        "answers": [
        {"id": "q2a1", "answer": "because not", "result" :  "wrong"}, 
        {"id": "q2a2", "answer": 'avoid', "result" :  "wrong"}, 
        {"id": "q2a3", "answer": 'to avoid', "result" :  "correct"} ,
        {"id": "q2a4", "answer": 'not to', "result" :  "wrong"} 
        ]
    },
    {
        "id": 3, 
        "question": "I strongly believe that ____ a house or a flat is a good investment" , 
        "answers": [
        {"id": "q3a1", "answer": "to buy",  "result" :  "wrong"}, 
        {"id": "q3a2", "answer": 'had bought',  "result" :  "wrong"}, 
        {"id": "q3a3", "answer": 'buy',  "result" :  "wrong"},
        {"id": "q3a4", "answer": 'buying',  "result" :  "correct"}
        ]  
    },
    {
        "id": 4, 
        "question":'___ in the advent of a financial crisis owning your own house is a safe option' , 
        "answers": [
        {"id": "q4a1", "answer": "It seams that", "result" :  "wrong"}, 
        {"id": "q4a2", "answer": 'From my perspective', "result" :  "correct"}, 
        {"id": "q4a3", "answer": 'On my view', "result" :  "wrong"},
        {"id": "q4a4", "answer": 'It seem to me that', "result" :  "wrong"},
        ]  
    },
    {
        "id": 5, 
        "question":'I truly feel that once ___ my own place, I will start investing money in bitcoins' , 
        "answers": [
        {"id": "q5a1", "answer": "I bought", "result" :  "wrong"}, 
        {"id": "q5a2", "answer": 'I have',  "result" :  "correct"}, 
        {"id": "q5a3", "answer": 'I will have', "result" :  "wrong"},
        {"id": "q5a4", "answer": 'I had', "result" :  "wrong"}
        ]
    }
    

]);

db.addCollection('results').insert([
    {
        "id": 1, 
        "message":'well, that is a start :q'  
        
    },
    {
        "id": 2, 
        "message":'be patient, you are getting somewhere'  
        
    },
    {
        "id": 3, 
        "message":'well done! ;)' 
        
    },
    {
        "id": 4, 
        "message":'Wow! congratulations :)'  
        
    }


]);
db.addCollection('answered');

db.saveDatabase();



module.exports = db;
//react + inMemory db
//https://www.youtube.com/watch?v=DVYKdp91FNU&list=PL67QbqrRRyyRVWj7gZeHM4Izz0wc12O0s&index=11