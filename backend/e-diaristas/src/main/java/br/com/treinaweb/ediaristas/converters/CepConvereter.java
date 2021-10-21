package br.com.treinaweb.ediaristas.converters;

import javax.persistence.AttributeConverter;

public class CepConvereter implements AttributeConverter<String, String> {

    @Override
    public String convertToDatabaseColumn(String cep) {
        return cep.replace("-","");
    }

    @Override
    public String convertToEntityAttribute(String cep) {
        return cep;
    }
    
}
