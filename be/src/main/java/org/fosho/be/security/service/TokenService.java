package org.fosho.be.security.service;


import org.fosho.be.security.dto.auth.ReissueRequestDto;
import org.fosho.be.security.dto.auth.TokenDto;

public interface TokenService {

    TokenDto reissue(ReissueRequestDto reissueRequestDto);
    void updateRefreshToken(Long userId, String refreshToken);
}