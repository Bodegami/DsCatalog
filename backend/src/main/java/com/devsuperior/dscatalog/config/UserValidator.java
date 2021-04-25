package com.devsuperior.dscatalog.config;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.devsuperior.dscatalog.entities.User;

public class UserValidator implements Validator{

	
	 /**
     * This Validator validates only Person instances
     */
    public boolean supports(Class<?> clazz) {
        return User.class.equals(clazz);
    }

    public void validate(Object obj, Errors e) {
        ValidationUtils.rejectIfEmpty(e, "name", "name.empty");
        User u = (User) obj;
        if (u.getFirstName().length() < 5) {
            e.rejectValue("name", "nome invalido");
        } else if (u.getFirstName().length() > 10) {
            e.rejectValue("name", "ai forçou ein");
        }
    }

}
