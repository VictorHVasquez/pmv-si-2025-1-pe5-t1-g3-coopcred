# Introdução

A CoopCred - Cooperativa de Crédito de Minas Gerais foi fundada com o objetivo de oferecer soluções financeiras acessíveis e seguras para seus cooperados. Com sede na cidade de Uberaba - MG, a cooperativa expandiu suas atividades e hoje conta com cinco filiais distribuídas em cidades próximas, consolidando-se como uma instituição confiável no setor financeiro. Atualmente, a empresa possui um quadro de 350 funcionários, que atuam para garantir a qualidade e eficiência dos serviços prestados.

As filiais da CoopCred estão localizadas nas seguintes cidades:

● **Filial 1**: Patos de Minas - MG  
● **Filial 2**: Poços de Caldas - MG  
● **Filial 3**: Montes Claros - MG  
● **Filial 4**: Governador Valadares - MG  
● **Filial 5**: Sete Lagoas - MG

**Missão:** Prover serviços financeiros de qualidade, garantindo segurança, transparência e acessibilidade aos cooperados, promovendo o desenvolvimento econômico e social das comunidades atendidas.
Visão: Ser referência no setor de cooperativas de crédito em Minas Gerais, destacando-se pela inovação tecnológica, segurança e eficiência nos serviços prestados aos cooperados.


# Projeto de Infraestrutura de Rede
Este projeto visa desenvolver a infraestrutura de rede para a CoopCred, garantindo a conectividade confiável entre a matriz e as filiais, além de oferecer serviços internos essenciais para o funcionamento seguro e eficiente da instituição.
A infraestrutura será projetada para suportar os serviços financeiros da cooperativa, incluindo operações bancárias internas, sistemas de transações online, comunicação entre unidades e segurança dos dados. Para isso, serão implementadas segmentações de rede, políticas de segurança e redundância para minimizar falhas, assegurando alta disponibilidade e proteção das informações sensíveis da instituição.

# Estrutura Organizacional da CoopCred

A distribuição dos colaboradores da CoopCred está organizada entre a matriz e as filiais, conforme ilustrado na Tabela 1. A matriz, localizada em Uberaba - MG, conta com 150 funcionários. As cinco filiais, situadas em diferentes cidades do interior de Minas Gerais, possuem 40 colaboradores cada, totalizando 350 funcionários em toda a empresa.

# Departamentos Principais

🔹 **Administração e Finanças** – Gerencia os investimentos, orçamentos e estratégias financeiras.  
🔹 **TI e Infraestrutura** – Responsável pela segurança digital, servidores, redes e suporte técnico.  
🔹 **Atendimento e Relacionamento** – Equipe de suporte ao cliente e serviços bancários presenciais.  
🔹 **Crédito e Financiamento** – Avaliação e concessão de empréstimos e financiamentos.  
🔹 **Segurança e Compliance** – Monitoramento de fraudes, auditorias e regulamentações financeiras.


**Tabela 1 – Funcionários por Setor e Unidade**

| Setor                     | Matriz (Uberaba) | Cada Filial | Total |
|--------------------------|------------------|-------------|-------|
| Diretoria Executiva      | 5                | 0           | 5     |
| Gerência e Administração | 20               | 5           | 45    |
| TI e Infraestrutura      | 25               | 5           | 50    |
| Atendimento e Caixa      | 50               | 20          | 150   |
| Crédito e Financiamento  | 30               | 7           | 65    |
| Segurança e Compliance   | 20               | 3           | 35    |
| **Total**                | **150**          | **40**      | **350** |

*Fonte: Dados internos da cooperativa (2025).*

# Principais Serviços da CoopCred


**Produtos Financeiros**  

● **Conta Corrente e Conta Poupança** – Para cooperados realizarem depósitos, pagamentos e movimentações.  
● **Empréstimos e Financiamentos** – Linhas de crédito com taxas reduzidas para pessoas físicas e empresas.  
● **Crédito Rural e Empresarial** – Apoio ao setor agrícola e pequenos negócios.  
● **Cartões de Crédito** – Opções de cartão com benefícios exclusivos para cooperados.  

**Serviços Bancários**  

● **PIX, TED e DOC** – Transferências rápidas e seguras.  
● **Boletos e Pagamentos** – Emissão e pagamento de contas.  
● **Investimentos e Previdência** – Planos de investimento e aposentadoria.  
● **Seguro e Consórcios** – Proteção financeira para cooperados.  

**Canais de Atendimento**  

● **Agências Físicas** – Atendimento presencial na matriz e nas 5 filiais.  
● **Aplicativo e Internet Banking** – Acesso remoto aos serviços bancários.  
● **Central de Atendimento** – Suporte telefônico e via chat.  


# Esboço da Proposta de Projeto de Redes - Estrutura Lógica e Física da Rede

**Topologia**


A rede será projetada com foco em segmentação, segurança e alta disponibilidade. A comunicação entre as unidades será estabelecida por meio de uma **WAN** em **Anel**, na qual as filiais estão interconectadas entre si e com a matriz, formando um circuito fechado. Essa topologia proporciona redundância, garantindo que, em caso de falha em um dos links, o tráfego de dados seja redirecionado por um caminho alternativo, assegurando a continuidade e resiliência da rede.


*Figura 1 - Topologia.*

Cada filial estará conectada às outras unidades e à matriz por meio de links dedicados, utilizando tecnologias como **VPN/MPLS**. Essas tecnologias garantirão a segurança da comunicação por meio de criptografia avançada e políticas rigorosas de controle de acesso, assegurando a integridade e confidencialidade dos dados.
Na camada local, cada unidade contará com sua própria **LAN Hierárquica**, segmentada em diferentes camadas para otimizar o gerenciamento e a segurança:

### Camada de Acesso
Nessa camada, encontram-se os dispositivos finais, como PCs e servidores, conectados a switches de acesso. Aqui, a prioridade é a **conectividade com os dispositivos finais**, garantindo acesso rápido e eficiente.

### Camada de Distribuição
A comunicação entre as diversas áreas da rede (interna e DMZ) será gerenciada por **switches de distribuição**, que conectam a camada de acesso à camada de núcleo. Essa camada facilita a organização do tráfego e melhora a performance da rede.

### Camada de Núcleo
Composta pelos **roteadores** da matriz e das filiais, responsáveis pela comunicação entre as localidades e com a rede externa. A topologia **WAN em Anel** assegura uma distribuição equilibrada do tráfego e melhora a resiliência da rede contra falhas.

A rede será projetada para alta disponibilidade, com redundância de links entre a matriz e as filiais, permitindo a continuidade das operações mesmo em caso de falha de conectividade. A adoção de **VPN/MPLS** proporciona uma solução robusta e segura para interligar as unidades de forma eficiente, mantendo a integridade dos dados e garantindo o desempenho da rede.

# Endereçamento IP e Sub-redes

A faixa de **IP privada** utilizada será:

- **LAN**: 192.168.0.0/16
- **WAN**: 10.10.0.0/16
- **DMZ**: 172.16.0.0/16

Essas faixas serão subdivididas em sub-redes **/24** para garantir **organização** e **escalabilidade**, conforme a **Tabela 2**.

**Tabela 2 - Endereçamento IP das Unidades e Serviços**

| Unidade           | Cidade                     | Faixa de Rede      | Máscara (CIDR)   | Hosts Disponíveis |
|-------------------|----------------------------|--------------------|------------------|-------------------|
| **Matriz**        | Uberaba - MG               | 192.168.0.0/24     | 255.255.255.0    | 254               |
| **Filial 1**      | Patos de Minas - MG        | 192.168.1.0/24     | 255.255.255.0    | 254               |
| **Filial 2**      | Poços de Caldas - MG       | 192.168.2.0/24     | 255.255.255.0    | 254               |
| **Filial 3**      | Montes Claros - MG         | 192.168.3.0/24     | 255.255.255.0    | 254               |
| **Filial 4**      | Governador Valadares - MG  | 192.168.4.0/24     | 255.255.255.0    | 254               |
| **Filial 5**      | Sete Lagoas - MG           | 192.168.5.0/24     | 255.255.255.0    | 254               |
| **Servidor Central** | Uberaba - MG            | 192.168.100.0/26   | 255.255.255.192  | 62                |
| **VPN**           | Todas as Unidades          | 10.10.200.0/27     | 255.255.255.224  | 30                |
| **MPLS**          | Todas as Unidades          | 10.10.200.32/27    | 255.255.255.224  | 30                |
| **DMZ Web Pública** | Uberaba - MG             | 172.16.250.0/27    | 255.255.255.224  | 30                |
| **DMZ E-mail**    | Uberaba - MG               | 172.16.10.0/27     | 255.255.255.224  | 30                |


# 📋 Tabela de Materiais 

## Matriz

**Tabela 3 - [Equipamentos](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe5-t1-g3-coopcred/raw/main/docs/Prototipo%20de%20rede/Planilha%20Equipamentos-%20Template.xlsx) - Matriz**

| Equipamento          | Quantidade |
|----------------------|------------|
| Roteador 2911        | 3          |
| Switch 3560-24       | 1          |
| Switch 2960 24TT     | 1          |
| Servidor PT          | 6          |
| PC                   | 150        |
| **Total**            | **161**    |

## Filiais

**Tabela 4 - [Equipamentos](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe5-t1-g3-coopcred/raw/main/docs/Prototipo%20de%20rede/Planilha%20Equipamentos-%20Template.xlsx) - Filiais**



| Equipamento          | Quantidade | Total por filial |
|----------------------|------------|------------------|
| Roteador 2911        | 2          | 10               |
| Switch 3560-24       | 1          | 5                |
| Switch 2960 24TT     | 1          | 5                |
| Servidor PT          | 1          | 5                |
| PC                   | 40         | 200              |
| **Total**            |            | **225**          |

# 📶 Cálculo de Links de Dados e de Internet

![Image](https://github.com/user-attachments/assets/11551ee2-2966-4397-8241-ebe0edf57f7c)

*Figura 2 - Tabela de Cálculo de Links de Dados e de Internet.*

---

# 📌 Tabela de Endereçamento IP - Matriz - Uberaba – MG

**Tabela 5 - Endereçamento IP - Matriz - Uberaba – MG**

| Dispositivo          | Nome                     | Faixa de Rede  | Máscara (CIDR)   | Gateway       |
|----------------------|--------------------------|----------------|------------------|---------------|
| Roteador WAN         | RTR-WAN-MATRIZ           | 10.10.0.0/24   | 255.255.255.0    | 10.10.0.1     |
| Firewall             | RTR-FW-MATRIZ            | 10.10.0.0/24   | 255.255.255.0    | 10.10.0.2     |
| Load Balancer       | RTR-LB-MATRIZ            | 10.10.0.0/24   | 255.255.255.0    | 10.10.0.3     |
| Switch Core         | SW-CORE-MATRIZ           | 192.168.0.0/24 | 255.255.255.0    | 192.168.0.1   |
| Servidor DHCP       | SRV-DHCP-MATRIZ          | 192.168.0.1/24 | 255.255.255.0    | 192.168.0.1   |
| Servidor DNS        | SRV-DNS-MATRIZ           | 192.168.0.0/24 | 255.255.255.0    | 192.168.0.1   |
| Servidor Web        | SRV-WEB-MATRIZ           | 192.168.0.0/24 | 255.255.255.0    | 192.168.0.1   |
| Servidor BD         | SRV-BD-MATRIZ            | 192.168.0.0/24 | 255.255.255.0    | 192.168.0.1   |
| Servidor FTP        | SRV-FTP-MATRIZ           | 192.168.0.0/24 | 255.255.255.0    | 192.168.0.1   |
| Switch DMZ          | SW-DMZ-MATRIZ            | 172.16.10.0/27 | 255.255.255.224  | N/A           |
| Servidor Web        | SRV-WEB-DMZ-MATRIZ       | 172.16.10.2/27 | 255.255.255.224  | 172.16.10.1   |
| Servidor Email      | SRV-MAIL-DMZ-MATRIZ      | 172.16.10.3/27 | 255.255.255.224  | 172.16.10.1   |
| PC TI               | PC-TI-MATRIZ-1           | 192.168.10.10/24| 255.255.255.0   | 192.168.10.1  |
| PC TI               | PC-TI-MATRIZ-2           | 192.168.10.11/24| 255.255.255.0   | 192.168.10.1  |
| PC TI               | PC-TI-MATRIZ-3           | 192.168.10.12/24| 255.255.255.0   | 192.168.10.1  |
| PC Administração     | PC-ADMIN-MATRIZ-1        | 192.168.20.10/24| 255.255.255.0   | 192.168.20.1  |
| PC Administração     | PC-ADMIN-MATRIZ-2        | 192.168.20.11/24| 255.255.255.0   | 192.168.20.1  |
| PC Administração     | PC-ADMIN-MATRIZ-3        | 192.168.20.12/24| 255.255.255.0   | 192.168.20.1  |
| PC Atendimento       | PC-ATEND-MATRIZ-1        | 192.168.30.10/24| 255.255.255.0   | 192.168.30.1  |
| PC Atendimento       | PC-ATEND-MATRIZ-2        | 192.168.30.11/24| 255.255.255.0   | 192.168.30.1  |
| PC Atendimento       | PC-ATEND-MATRIZ-3        | 192.168.30.12/24| 255.255.255.0   | 192.168.30.1  |
| PC Crédito          | PC-CRED-MATRIZ-1         | 192.168.40.10/24| 255.255.255.0   | 192.168.40.1  |
| PC Crédito          | PC-CRED-MATRIZ-2         | 192.168.40.11/24| 255.255.255.0   | 192.168.40.1  |
| PC Crédito          | PC-CRED-MATRIZ-3         | 192.168.40.12/24| 255.255.255.0   | 192.168.40.1  |
| PC Segurança        | PC-SEG-MATRIZ-1          | 192.168.50.10/24| 255.255.255.0   | 192.168.50.1  |
| PC Segurança        | PC-SEG-MATRIZ-2          | 192.168.50.11/24| 255.255.255.0   | 192.168.50.1  |
| PC Segurança        | PC-SEG-MATRIZ-3          | 192.168.50.12/24| 255.255.255.0   | 192.168.50.1  |
| PC Diretoria        | PC-DIR-MATRIZ-1          | 192.168.60.10/24| 255.255.255.0   | 192.168.60.1  |
| PC Diretoria        | PC-DIR-MATRIZ-2          | 192.168.60.11/24| 255.255.255.0   | 192.168.60.1  |
| PC Diretoria        | PC-DIR-MATRIZ-3          | 192.168.60.12/24| 255.255.255.0   | 192.168.60.1  |

---

# 📌 Tabela de Endereçamento IP - Filial 1 - Patos de Minas - MG

**Tabela 6 - Endereçamento IP - Filial 1 - Patos de Minas - MG**

| Dispositivo         | Nome                     | Faixa de Rede  | Máscara (CIDR)   | Gateway       |
|---------------------|--------------------------|----------------|------------------|---------------|
| Roteador WAN        | RTR-WAN-FILIAL1          | 10.10.1.0/24   | 255.255.255.0    | 10.10.1.1     |
| Switch Core         | SW-CORE-FILIAL1          | 192.168.1.0/24 | 255.255.255.0    | 192.168.1.1   |
| Servidor DHCP       | SRV-DHCP-FILIAL1         | 192.168.1.1/24 | 255.255.255.0    | 192.168.2.1   |
| PC TI               | PC-TI-FILIAL1-1          | 192.168.11.10/24| 255.255.255.0   | 192.168.11.1  |
| PC TI               | PC-TI-FILIAL1-2          | 192.168.11.11/24| 255.255.255.0   | 192.168.11.1  |
| PC Administração    | PC-ADMIN-FILIAL1-1       | 192.168.21.10/24| 255.255.255     | 192.168.21.1  |
| PC Administração    | PC-ADMIN-FILIAL1-2       | 192.168.21.11/24| 255.255.255     | 192.168.21.1  |
| PC  Atendimento     | PC-ATEND-FILIAL1-1       | 192.168.31.10/24| 255.255.255     | 192.168.31.1  |
| PC  Atendimento     | PC-ATEND-FILIAL1-2       | 192.168.31.11/24| 255.255.255     | 192.168.31.1  |
| PC Crédito          | PC-CRED-FILIAL1-1        | 192.168.41.10/24| 255.255.255     | 192.168.41.1  |
| PC Crédito          | PC-CRED-FILIAL1-2        | 192.168.41.11/24| 255.255.255     | 192.168.41.1  |
| PC Segurança        | PC-CRED-FILIAL1-1        | 192.168.51.10/24| 255.255.255     | 192.168.51.1  |
| PC Segurança        | PC-CRED-FILIAL1-2        | 192.168.51.11/24| 255.255.255     | 192.168.51.1  |

---

# 📌 Tabela 7 – Endereçamento IP – Filial 2 – Poços de Caldas – MG

**Tabela 7 - Endereçamento IP - Filial 2 - Poços de Caldas - MG**

| Dispositivo         | Nome                     | Faixa de Rede  | Máscara (CIDR)   | Gateway       |
|---------------------|--------------------------|----------------|------------------|---------------|
| Roteador WAN        | RTR-WAN-FILIAL2          | 10.10.2.0/24   | 255.255.255.0    | 10.10.2.1     |
| Switch Core         | SW-CORE-FILIAL2          | 192.168.2.0/24 | 255.255.255.0    | 192.168.2.1   |
| Servidor DHCP       | SRV-DHCP-FILIAL2         | 192.168.2.1/24 | 255.255.255.0    | 192.168.2.1   |
| PC TI               | PC-TI-FILIAL2-1          | 192.168.12.10/24| 255.255.255.0   | 192.168.12.1  |
| PC TI               | PC-TI-FILIAL2-2          | 192.168.12.11/24| 255.255.255.0   | 192.168.12.1  |
| PC Administração    | PC-ADMIN-FILIAL2-1       | 192.168.22.10/24| 255.255.255     | 192.168.22.1  |
| PC Administração    | PC-ADMIN-FILIAL2-2       | 192.168.22.11/24| 255.255.255     | 192.168.22.1  |
| PC  Atendimento     | PC-ATEND-FILIAL2-1       | 192.168.32.10/24| 255.255.255     | 192.168.32.1  |
| PC  Atendimento     | PC-ATEND-FILIAL2-2       | 192.168.32.11/24| 255.255.255     | 192.168.32.1  |
| PC Crédito          | PC-CRED-FILIAL2-1        | 192.168.42.10/24| 255.255.255     | 192.168.42.1  |
| PC Crédito          | PC-CRED-FILIAL2-2        | 192.168.42.11/24| 255.255.255     | 192.168.42.1  |
| PC Segurança        | PC-CRED-FILIAL2-1        | 192.168.52.10/24| 255.255.255     | 192.168.52.1  |
| PC Segurança        | PC-CRED-FILIAL2-2        | 192.168.52.11/24| 255.255.255     | 192.168.52.1  |

---

# 📌 Tabela de Endereçamento IP - Filial 3 - Montes Claros - MG

**Tabela 8 - Endereçamento IP - Filial 3 - Montes Claros - MG**

| Dispositivo         | Nome                     | Faixa de Rede  | Máscara (CIDR)   | Gateway       |
|---------------------|--------------------------|----------------|------------------|---------------|
| Roteador WAN        | RTR-WAN-FILIAL3          | 10.10.3.0/24   | 255.255.255.0    | 10.10.3.1     |
| Switch Core         | SW-CORE-FILIAL3          | 192.168.3.0/24 | 255.255.255.0    | 192.168.3.1   |
| Servidor DHCP       | SRV-DHCP-FILIAL3         | 192.168.3.1/24 | 255.255.255.0    | 192.168.3.1   |
| PC TI               | PC-TI-FILIAL3-1          | 192.168.13.10/24| 255.255.255.0   | 192.168.13.1  |
| PC TI               | PC-TI-FILIAL3-2          | 192.168.13.11/24| 255.255.255.0   | 192.168.13.1  |
| PC Administração    | PC-ADMIN-FILIAL3-1       | 192.168.23.10/24| 255.255.255     | 192.168.23.1  |
| PC Administração    | PC-ADMIN-FILIAL3-2       | 192.168.23.11/24| 255.255.255     | 192.168.23.1  |
| PC  Atendimento     | PC-ATEND-FILIAL3-1       | 192.168.33.10/24| 255.255.255     | 192.168.33.1  |
| PC  Atendimento     | PC-ATEND-FILIAL3-2       | 192.168.33.11/24| 255.255.255     | 192.168.33.1  |
| PC Crédito          | PC-CRED-FILIAL3-1        | 192.168.43.10/24| 255.255.255     | 192.168.43.1  |
| PC Crédito          | PC-CRED-FILIAL3-2        | 192.168.43.11/24| 255.255.255     | 192.168.43.1  |
| PC Segurança        | PC-CRED-FILIAL3-1        | 192.168.53.10/24| 255.255.255     | 192.168.53.1  |
| PC Segurança        | PC-CRED-FILIAL3-2        | 192.168.53.11/24| 255.255.255     | 192.168.53.1  |

---

# 📌 Tabela de Endereçamento IP - Filial 4 Governador Valadares - MG

**Tabela 9 - Endereçamento IP - Filial 4 - Governador Valadares - MG**

| Dispositivo         | Nome                     | Faixa de Rede  | Máscara (CIDR)   | Gateway       |
|---------------------|--------------------------|----------------|------------------|---------------|
| Roteador WAN        | RTR-WAN-FILIAL4          | 10.10.4.0/24   | 255.255.255.0    | 10.10.4.1     |
| Switch Core         | SW-CORE-FILIAL4          | 192.168.4.0/24 | 255.255.255.0    | 192.168.4.1   |
| Servidor DHCP       | SRV-DHCP-FILIAL4         | 192.168.4.1/24 | 255.255.255.0    | 192.168.4.1   |
| PC TI               | PC-TI-FILIAL4-1          | 192.168.14.10/24| 255.255.255.0   | 192.168.14.1  |
| PC TI               | PC-TI-FILIAL4-2          | 192.168.14.11/24| 255.255.255.0   | 192.168.14.1  |
| PC Administração    | PC-ADMIN-FILIAL4-1       | 192.168.24.10/24| 255.255.255     | 192.168.24.1  |
| PC Administração    | PC-ADMIN-FILIAL4-2       | 192.168.24.11/24| 255.255.255     | 192.168.24.1  |
| PC  Atendimento     | PC-ATEND-FILIAL4-1       | 192.168.34.10/24| 255.255.255     | 192.168.34.1  |
| PC  Atendimento     | PC-ATEND-FILIAL4-2       | 192.168.34.11/24| 255.255.255     | 192.168.34.1  |
| PC Crédito          | PC-CRED-FILIAL4-1        | 192.168.44.10/24| 255.255.255     | 192.168.44.1  |
| PC Crédito          | PC-CRED-FILIAL4-2        | 192.168.44.11/24| 255.255.255     | 192.168.44.1  |
| PC Segurança        | PC-CRED-FILIAL4-1        | 192.168.54.10/24| 255.255.255     | 192.168.54.1  |
| PC Segurança        | PC-CRED-FILIAL4-2        | 192.168.54.11/24| 255.255.255     | 192.168.54.1  |

---

# 📌 Tabela de Endereçamento IP - Filial 5 Sete Lagoas  - MG

**Tabela 10 - Endereçamento IP - Filial 5 - Sete Lagoas  - MG**

| Dispositivo         | Nome                     | Faixa de Rede  | Máscara (CIDR)   | Gateway       |
|---------------------|--------------------------|----------------|------------------|---------------|
| Roteador WAN        | RTR-WAN-FILIAL5          | 10.10.5.0/24   | 255.255.255.0    | 10.10.5.1     |
| Switch Core         | SW-CORE-FILIAL5          | 192.168.5.0/24 | 255.255.255.0    | 192.168.5.1   |
| Servidor DHCP       | SRV-DHCP-FILIAL5         | 192.168.5.1/24 | 255.255.255.0    | 192.168.5.1   |
| PC TI               | PC-TI-FILIAL5-1          | 192.168.15.10/24| 255.255.255.0   | 192.168.15.1  |
| PC TI               | PC-TI-FILIAL5-2          | 192.168.15.11/24| 255.255.255.0   | 192.168.15.1  |
| PC Administração    | PC-ADMIN-FILIAL5-1       | 192.168.25.10/24| 255.255.255     | 192.168.25.1  |
| PC Administração    | PC-ADMIN-FILIAL5-2       | 192.168.25.11/24| 255.255.255     | 192.168.25.1  |
| PC  Atendimento     | PC-ATEND-FILIAL5-1       | 192.168.35.10/24| 255.255.255     | 192.168.35.1  |
| PC  Atendimento     | PC-ATEND-FILIAL5-2       | 192.168.35.11/24| 255.255.255     | 192.168.35.1  |
| PC Crédito          | PC-CRED-FILIAL5-1        | 192.168.45.10/24| 255.255.255     | 192.168.45.1  |
| PC Crédito          | PC-CRED-FILIAL5-2        | 192.168.45.11/24| 255.255.255     | 192.168.45.1  |
| PC Segurança        | PC-CRED-FILIAL5-1        | 192.168.55.10/24| 255.255.255     | 192.168.55.1  |
| PC Segurança        | PC-CRED-FILIAL5-2        | 192.168.55.11/24| 255.255.255     | 192.168.55.1  |

---

## Serviços de Rede Implementados

- **Firewall**: Controle de acessos entre as unidades.
- **VPN/MPLS**: Comunicação segura entre as unidades.
- **DHCP**: Distribuição dinâmica de IPs.
- **Wi-Fi**:  Implementação de redes sem fio segmentadas para uso interno e de convidados, com autenticação segura e políticas de controle de acesso.
- **DNS**: Resolução de nomes na rede.
- **NAT**: Tradução de endereços para acesso externo.
- **VoIP**: Chamadas de voz entre dispositivos e atendimento a clientes.
- **Banco de Dados**: Servidor para armazenamento centralizado de informações.
- **FTP**: Servidor para registro e troca de arquivos.
- **NFS**: Compartilhamento de dados entre sistemas e backup automatizado.

## Segurança e Compliance

- **Serviço de Controle de Acesso**: Implementação de políticas de RBAC e MFA para controlar o acesso aos sistemas de dados críticos, como o banco de dados, servidores de e-mail e servidores web.

- **Segurança Wi-Fi**:Configuração de redes separadas para colaboradores e convidados, uso de VLANs para segmentação de tráfego, autenticação WPA3 e controle de acesso baseado em MAC ou portal cativo para usuários convidados.

- **Monitoramento da Rede**:Coleta de dados de desempenho e detecção de anomalias para garantir a integridade e eficiência da infraestrutura.

- **Auditoria e Ferramentas de Segurança**:Implementação de ferramentas para monitoramento contínuo da segurança e compliance da rede.

## Planos de Backup:

- **Backup Diário** para dados críticos (banco de dados e arquivos) e Backup Semanal Completo.
- **Backup Incremental** diário, copiando apenas dados alterados.
- **Armazenamento** em nuvem e servidores dedicados para maior segurança.
- **Criptografia** dos backups e redundância para proteção contra falhas.

## Plano de Recuperação de Desastres:
- **Redundância de Hardware**: Equipamentos críticos como servidores de banco de dados, roteadores e switches terão backup em caso de falha.
Failover Automático para garantir continuidade de serviços em caso de falhas de hardware.
- **Procedimentos de Restauração** bem documentados e testes regulares para garantir a eficiência da recuperação.
- **Plano de Comunicação** para notificação rápida e ações imediatas em caso de falha.

