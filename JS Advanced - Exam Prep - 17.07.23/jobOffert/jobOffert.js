class JobOffers {
    constructor(employer, position) {
      this.employer = employer;
      this.position = position;
      
      this.jobCandidates = [];
    }
  
    jobApplication(candidates) {
      for (const candidate of candidates) {
        const [name, education, yearsExperience] = candidate.split("-");
        const existingCandidate = this.jobCandidates.find((c) => c.name === name);
        if (existingCandidate) {
          if (parseInt(yearsExperience) > parseInt(existingCandidate.yearsExperience)) {
            existingCandidate.yearsExperience = yearsExperience;
          }
        } else {
          this.jobCandidates.push({ name, education, yearsExperience });
        }
      }
      const names = this.jobCandidates.map((candidate) => candidate.name).join(", ");
      return `You successfully added candidates: ${names}.`;
    }
  
    jobOffer(chosenPerson) {
      const [name, minimalExperience] = chosenPerson.split("-");
      const selectedCandidate = this.jobCandidates.find((c) => c.name === name);
  
      if (!selectedCandidate) {
        throw new Error(`${name} is not in the candidates list!`);
      }
  
      if (parseInt(minimalExperience) > parseInt(selectedCandidate.yearsExperience)) {
        throw new Error(
          `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
        );
      }
  
      selectedCandidate.yearsExperience = "hired";
      return `Welcome aboard, our newest employee is ${name}.`;
    }
  
    salaryBonus(name) {
      const selectedCandidate = this.jobCandidates.find((c) => c.name === name);
  
      if (!selectedCandidate) {
        throw new Error(`${name} is not in the candidates list!`);
      }
  
      let salary;
      if (selectedCandidate.education === "Bachelor") {
        salary = "$50,000";
      } else if (selectedCandidate.education === "Master") {
        salary = "$60,000";
      } else {
        salary = "$40,000";
      }
  
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary} per year!`;
    }
  
    candidatesDatabase() {
      if (this.jobCandidates.length === 0) {
        throw new Error("Candidate Database is empty!");
      }
  
      const sortedCandidates = this.jobCandidates
        .map((candidate) => `${candidate.name}-${candidate.yearsExperience}`)
        .sort();
  
      return `Candidates list:\n${sortedCandidates.join("\n")}`;
    }
  }