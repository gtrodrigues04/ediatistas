package br.com.treinaweb.ediaristas.converters;

import javax.persistence.AttributeConverter;

public class TelefoneConverter implements AttributeConverter<String, String> 
{

    @Override
    public String convertToDatabaseColumn(String telefone) {
        return telefone.replace("[() -]", "");
    }

    @Override
    public String convertToEntityAttribute(String telefone) {
        return telefone;
    }
    
    
}
