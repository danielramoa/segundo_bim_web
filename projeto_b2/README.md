# Comparação de Algoritmos para Geração de Números Aleatórios Únicos

Este repositório apresenta uma comparação entre dois algoritmos para geração de números aleatórios únicos em JavaScript: uma **versão original** (ineficiente) e uma **versão otimizada**. O objetivo é demonstrar que a versão otimizada reduz significativamente o tempo de processamento e utiliza melhor os recursos computacionais.

---

## 📋 Metodologia

Para comparar os algoritmos, utilizamos a função `console.time()` e `console.timeEnd()` para medir o tempo de execução necessário para gerar a mesma quantidade de números aleatórios únicos (neste caso, 50). Ambos os algoritmos foram executados nas mesmas condições para garantir resultados consistentes.

---

## 🚀 Resultados

### Tempos médios de execução:
- **Algoritmo Antigo**: 12 ms  
- **Algoritmo Otimizado**: 3 ms  


# Comparação de Desempenho, Benefícios da Otimização e Conclusão

Este documento detalha os resultados da comparação de desempenho entre o algoritmo original e o algoritmo otimizado para geração de números aleatórios únicos, destacando os benefícios da otimização implementada e apresentando a conclusão baseada nos testes realizados.

---

## 🔬 Comparação de Desempenho

### Metodologia:
Para comparar os algoritmos, utilizamos `console.time()` e `console.timeEnd()` para medir o tempo de execução ao gerar 50 números aleatórios únicos. Ambos os algoritmos foram executados nas mesmas condições para garantir resultados consistentes.

### Resultados obtidos:
- **Tempo médio do Algoritmo Original**: **12 ms**  
- **Tempo médio do Algoritmo Otimizado**: **3 ms**

### Cálculo da Redução Percentual:
A redução percentual no tempo foi calculada com a regra de três:

12 --- 100%
3  --- x

12x == 300
x == 25%

100% - 25% = 75%.

Portanto, o algoritmo otimizado é **75% mais rápido** que o original.

---

## 📊 Benefícios da Otimização

1. **Eliminação de repetições desnecessárias**:
   - O algoritmo original frequentemente gerava números duplicados, aumentando a complexidade e o tempo de processamento.
   - O algoritmo otimizado evita esse problema gerando todos os números possíveis de forma direta.

2. **Maior eficiência no tempo de execução**:
   - O método otimizado reduz o número de operações, tornando o algoritmo mais rápido e eficiente.

3. **Uso racional dos recursos computacionais**:
   - O algoritmo otimizado consome menos memória e processamento, aproveitando melhor os recursos disponíveis.

4. **Escalabilidade**:
   - A abordagem otimizada é mais adequada para grandes quantidades de números, oferecendo desempenho consistente.

---

## 📚 Conclusão

Os testes realizados mostram que a nova versão do algoritmo reduz o tempo de execução em **75%** em relação à versão original, demonstrando a importância de implementar práticas de otimização em algoritmos. 

### Lições aprendidas:
- **Eficiência importa**: Mesmo para tarefas aparentemente simples, algoritmos ineficientes podem desperdiçar recursos valiosos.
- **Otimização é um processo iterativo**: Pequenos ajustes no design do algoritmo podem gerar grandes impactos no desempenho.

### Resultado final:
O algoritmo otimizado é claramente superior em termos de desempenho, uso de recursos e escalabilidade, sendo a melhor escolha para resolver problemas semelhantes.

---

### 💡 Próximos passos:
Se houver necessidade de gerar números únicos para intervalos maiores ou aplicações mais complexas, o algoritmo pode ser expandido ou adaptado para atender a novas demandas, mantendo o foco em eficiência e simplicidade.

