import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {// gera numeros aleatorio de 0 a 9
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatado(cpf) { //formaração do cpf
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  geraNovoCpf() {
    const cpfSemDigito = this.rand();// gera cpf sem digito
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito); //usando validacpf para pegar o digito
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
    const novoCpf = cpfSemDigito + digito1 + digito2;
    return this.formatado(novoCpf); 
  }
}
