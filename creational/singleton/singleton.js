class Logger {
  constructor() {
    if (Logger._instance) {
      console.log('return previously created logger object instead of creating a new one');
      return Logger._instance;
    }
    console.log('create new logger object for the first time');
    Logger._instance = this;
    return this;
  }

  log (...logs) {
    logs.forEach(log => console.log(log));
  }

  logWithTableFormat(...logs) {
    console.table(logs);
  }
}

const firstLogger = new Logger();
const secondLogger = new Logger();

console.log(`are firstLogger and secondLogger the same ? ${firstLogger === secondLogger}`);

firstLogger.log({userName: 'hieptl', job: 'Software Engineer'});
secondLogger.logWithTableFormat({userName: 'hieptl', job: 'Software Engineer'});