package com.cloudrand.arcapi.jwt;

import com.cloudrand.arcapi.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

@Component
public class JwtUtil {

    @Autowired
    private UserRepository userRepository;

    private SecretKey getSigningKey() {
        String SECRET_KEY = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }

    public String extractUsername(String token) {
        return extractClaim(token,Claims::getSubject);
    }

    public Long extractUserId(String token) {return extractClaim(token,claims -> claims.get("userId", Long.class));}

    public Date extractExpiration(String token) {
        return extractClaim(token,Claims::getExpiration);
    }

    public<T> T extractClaim(String token, Function<Claims,T>resolver){
        Claims claims =extractAllClaims(token);
        return resolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private boolean isTokenExpired(String token) {
        return !extractExpiration(token).before(new Date());
    }

    public String generateToken(String username) {
        Map<String, Object> claim = new HashMap<>();
        claim.put("userId", userRepository.findUserIdByUsername(username));
    return Jwts.builder()
            .claims(claim)
            .subject(username)
            .header().empty().add("typ","JWT")
            .and()
            .issuedAt(new Date(System.currentTimeMillis()))
            .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 60 minutes expiration time
            .signWith(getSigningKey())
            .compact();
    }

    public boolean isTokenValid(String token, String username) {
        return (username.equals(extractUsername(token)) && isTokenExpired(token));
    }

    public boolean validateToken(String token) {
        return isTokenExpired(token);
    }

}
