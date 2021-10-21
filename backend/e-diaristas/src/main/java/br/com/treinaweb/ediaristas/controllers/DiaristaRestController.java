package br.com.treinaweb.ediaristas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.treinaweb.ediaristas.dtos.DiaristasPagedResponse;

import br.com.treinaweb.ediaristas.repositories.DiaristaRepository;
import br.com.treinaweb.ediaristas.services.ViaCepService;

@RestController
@RequestMapping("/api/diaristas-cidade")
public class DiaristaRestController {

    @Autowired
    private DiaristaRepository diaristaRepository;

    @Autowired
    private ViaCepService viaCepService;

    @GetMapping
    public DiaristasPagedResponse buscarDiaristasPorCep(@RequestParam String cep) {
        var endereco = viaCepService.buscaEnderecoPorCep(cep);
        var codigoIbge = endereco.getIbge();

        var pageble = PageRequest.of(0, 6);
        var diaristas = diaristaRepository.findByCodigoIbge(codigoIbge, pageble);
  
        var quantidadeDiaristas = diaristas.getTotalElements() > 6 ? diaristas.getTotalElements() - 6 : 0;

        return new DiaristasPagedResponse(diaristas.getContent(), quantidadeDiaristas);
    }
}
