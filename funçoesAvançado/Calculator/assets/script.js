function criaCalculadora(){

    return{
        display: document.querySelector('.display'),
     //   btnClear: document.querySelector('.btn-clear'),
     //   btnDel: document.querySelector('.btn-del'),
     //   btnEq: document.querySelector('.btn-eq'),
               
       
        btnParaDisplay(valor){
            this.display.value += valor;
         },
        
        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        pressionaEnter(){
            this.display.addEventListener('keyUp', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida!')
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta inválida!')
                return;
            }

        },

        inicia(){
            this.clickBotoes();  
            this.pressionaEnter();         
        },

        clickBotoes(){
            document.addEventListener('click', e =>{
                const el = e.target;
                
                if(el.classList.contains('btn-num')){
                   this.btnParaDisplay(el.innerText);
                }   
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                    this.pressionaEnter();
                }
                this.display.focus();
            });
        },


    };
}
const calculadora = criaCalculadora();
calculadora.inicia();