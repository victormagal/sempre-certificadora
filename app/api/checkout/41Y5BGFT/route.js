/* eslint-disable no-undef */
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/comercial/scd/pagamento-transparente/41Y5BGFT`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'mz-integration': 'sempre'
      },
      body: JSON.stringify({
        bairro_cobranca: body.bairro_cobranca,
        cep_cobranca: body.cep_cobranca,
        cidade_cobranca: body.cidade_cobranca,
        complemento_cobranca: body.complemento_cobranca,
        cpf_certificado: body.cpf_certificado,
        cpf_cnpj_cobranca: body.cpf_cnpj_cobranca,
        cupom_desconto: body.cupom_desconto,
        ddd_telefone_cobranca: body.ddd_telefone_cobranca,
        dn_certificado: body.dn_certificado,
        email: body.email,
        forma_pagamento: body.forma_pagamento,
        id_filial: body.id_filial,
        id_produto: body.id_produto,
        logradouro_cobranca: body.logradouro_cobranca,
        midia_obrigatorio: body.midia_obrigatorio,
        nome_cobranca: body.nome_cobranca,
        numero_cobranca: body.numero_cobranca,
        qtd_parcelas: body.qtd_parcelas,
        telefone_cobranca: body.telefone_cobranca,
        tipo_atendimento: body.tipo_atendimento,
        token: body.token,
        uf_cobranca: body.uf_cobranca
      })
    }
  );

  const data = await res.json();

  return NextResponse.json({ data });
}
